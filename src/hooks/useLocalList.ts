import { localStorageAvailable, getFromLocalStorage, storeInLocalStorage } from '../utils';
import { useState, useEffect, useRef } from 'react';
import isEmpty from 'lodash/isEmpty';

type ListProps = {
  shortLink: string;
  original: string;
};

function useLocalList(): {
  localList: Array<ListProps>;
  updateLocalList: (data: ListProps) => void;
  clearList: () => void;
} {
  const [localList, setLocalList] = useState<Array<ListProps>>([]);

  const storageAvailable: boolean = localStorageAvailable();
  const initialized = useRef(false);

  useEffect(() => {
    // On page load, set the shortened links list from localStorage
    if (storageAvailable && isEmpty(localList) && !initialized.current) {
      const list = getFromLocalStorage('shortenedList') || [];
      initialized.current = true;
      setLocalList(list);
    }
  }, [storageAvailable, localList]);

  function updateLocalList(data: ListProps) {
    const newLocalList = [data, ...localList];
    if (storageAvailable) {
      storeInLocalStorage('shortenedList', newLocalList);
    }
    setLocalList(newLocalList);
  }

  function clearList() {
    if (storageAvailable) {
      storeInLocalStorage('shortenedList', []);
    }
    setLocalList([]);
  }

  return { localList, updateLocalList, clearList };
}

export default useLocalList;
