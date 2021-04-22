type ListProps = {
  shortLink: string;
  original: string;
};

export function localStorageAvailable(): boolean {
  let storage;
  try {
    storage = window.localStorage;
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export function storeInLocalStorage(key: string, data: Array<ListProps>): undefined {
  localStorage.setItem(key, JSON.stringify(data));
  return;
}

export function getFromLocalStorage(key: string): Array<ListProps> | null {
  const localData = JSON.parse(localStorage.getItem(key));
  if (localData) {
    return localData;
  }

  return null;
}

export default {
  storeInLocalStorage,
  getFromLocalStorage,
  localStorageAvailable,
};
