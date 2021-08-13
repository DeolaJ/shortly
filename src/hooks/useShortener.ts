import { useState, SetStateAction, Dispatch, useEffect } from 'react';
import shortenAPI from '../api/fetch';

type ErrorProps = {
  error: boolean;
  errorText: string;
};

type ListProps = {
  shortLink: string;
  original: string;
};

function useShortener(
  updateLocalList: (data: ListProps) => void
): {
  url: string;
  status: boolean;
  setUrl: Dispatch<SetStateAction<string>>;
  doShortenApi: () => void;
  error: ErrorProps;
} {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState(false);
  const [error, setError] = useState({
    error: false,
    errorText: '',
  });

  function validateUrl(url: string): boolean {
    if (url.trim()) {
      const validator = /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g;
      return validator.test(url);
    }
    return false;
  }

  async function doShortenApi() {
    const validUrl = validateUrl(url);
    if (!validUrl) {
      setError({
        error: true,
        errorText: url.trim() ? 'Please enter a valid link' : 'Please add a link',
      });
      return;
    }
    setStatus(true);
    return shortenAPI(url)
      .then((response) => {
        if (response.response) {
          const { result } = response.response;
          const data = {
            shortLink: result.full_short_link,
            original: result.original_link,
          };
          updateLocalList(data);
        } else {
          setError({
            error: true,
            errorText: response.response.error,
          });
        }
        setStatus(false);
      })
      .catch((error) => {
        console.log({ error });
        setStatus(false);
        return;
      });
  }

  useEffect(() => {
    // To reset the error state back to default
    if (error.error) {
      setTimeout(() => {
        setError({
          error: false,
          errorText: '',
        });
      }, 3500);
    }
  }, [error.error]);

  return { url, status, setUrl, doShortenApi, error };
}

export default useShortener;
