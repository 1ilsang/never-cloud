export const isLogin = (): boolean =>
  window.sessionStorage.getItem(`user`) ? true : false;
