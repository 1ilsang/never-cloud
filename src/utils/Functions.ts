export const debounce = (callback: Function, ms: number) => {
  let debounceCheck: number;

  return function<T>(...args: Array<T>) {
    if (debounceCheck) clearTimeout(debounceCheck);
    debounceCheck = window.setTimeout(() => {
      callback(...args);
    }, ms);
  };
};
