import { useEffect, useState } from 'react';

export const useLocalStorage = (keyName, defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const savedValue = localStorage.getItem(keyName);

    if (savedValue !== null) {
      setValue(savedValue);
    }
  }, [setValue, keyName]);

  useEffect(() => {
    if (value === defaultValue) {
      return;
    }
    localStorage.setItem(keyName, value);
  }, [value, keyName, defaultValue]);

  return [value, setValue];
};
