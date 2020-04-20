// import { RouteComponentProps } from 'react-router-dom';

export type TonLNBHandler = {
  handler: Function;
  isViewLNB?: boolean;
};

export type Thandler = {
  handler: Function;
};

export type TJustifiedLayoutItem = {
  aspectRatio: number;
  top: number;
  width: number;
  height: number;
  left: number;
};

export type TJustifiedLayout = {
  containerheight: number;
  windowCount: number;
  boxes: Array<TJustifiedLayoutItem>;
};
