type ResultProps = {
  code: string;
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
};

type ResponseProps = {
  ok: boolean;
  result?: ResultProps;
  error?: string;
};

async function shortenAPI(url: string): Promise<{ response: ResponseProps }> {
  return fetch('/api/shorten', {
    method: 'POST',
    body: JSON.stringify({ url }),
  }).then((response) => response.json());
}

export default shortenAPI;
