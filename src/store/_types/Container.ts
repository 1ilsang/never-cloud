import { RouteComponentProps } from 'react-router-dom';

export type TonLNBHandler = {
  handler: Function;
  isViewLNB?: boolean;
};

export type TRightContainer = {
  onLNBHandler: TonLNBHandler;
} & RouteComponentProps;
