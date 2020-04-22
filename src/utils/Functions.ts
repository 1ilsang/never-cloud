import { TPhoto } from 'store/_types/DataSet';

export const debounce = (callback: Function, ms: number) => {
  let debounceCheck: number;

  return function <T>(...args: Array<T>) {
    if (debounceCheck) clearTimeout(debounceCheck);
    debounceCheck = window.setTimeout(() => {
      callback(...args);
    }, ms);
  };
};

export const getSortedFunction: Function = (key: string) => {
  switch (key) {
    case `filmedDesc`:
      return (a: TPhoto, b: TPhoto) =>
        new Date(a.date).getTime() < new Date(b.date).getTime() ? -1 : 1;
  }
};
