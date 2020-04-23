import justifiedLayout from 'justified-layout';
import { TPhoto } from 'store/_types/DataSet';
import { TJustifiedLayout } from 'store/_types/Container';
import { throttle } from 'utils/Functions';

export const getOriginList = ({ defaultPhotoList, curIdx }) => {
  const originList: TPhoto[] = defaultPhotoList.slice(
    0,
    curIdx.start + curIdx.stepping,
  );

  return originList;
};

export const getInitLayout = ({ originList }) => {
  const layoutList: number[] = originList.map((e) =>
    Number((Number(e.width.slice(0, -2)) / 120.45).toFixed(2)),
  );

  // REVIEW: line-breaking algorithm
  const initLayout: TJustifiedLayout = justifiedLayout(layoutList, {
    containerWidth: window.innerWidth - 290,
    targetRowHeight: 124,
    boxSpacing: 3,
  });

  return initLayout;
};

export const startScrollThrottle = throttle(
  (callback: Function, { scrollTop, scrollHeight }: Element) => {
    console.info(
      `********** throttle!`,
      scrollHeight - window.innerHeight - scrollTop,
    );
    if (scrollHeight - window.innerHeight - scrollTop > 100) return;
    if (callback) callback();
  },
  500,
);

export const DEFAULT_IDX = {
  start: 0,
  stepping: 20,
};

export const DEFAULT_CONDITION = {
  PHOTO_GROUP_TYPES: window.localStorage.getItem(`PHOTO_GROUP_TYPES`) || `year`,
  PHOTO_SORTS: window.localStorage.getItem(`PHOTO_SORTS`) || `filmedDesc`,
};
