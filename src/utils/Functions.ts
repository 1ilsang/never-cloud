export const debounce = (callback: Function, ms: number) => {
  let debounceCheck: number;

  return function(...args: any) {
    if (debounceCheck) clearTimeout(debounceCheck);
    debounceCheck = <any>setTimeout(() => {
      callback(...args);
    }, ms);
  };
};
