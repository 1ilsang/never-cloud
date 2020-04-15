import React, { FunctionComponent } from 'react';
import { LNBContainer } from './LNB';

const ContentsContainer: FunctionComponent<{}> = () => {
  // TODO: LeftLnb
  // - router /#/:path/:cmd
  // - 공유 - 함께보기에서 만들면 기존애들 사라져야 하는거
  // TODO: API Loading...
  // TODO: LazyLoading
  // TODO: Virtual Card Box - height fix, width flex
  // TODO: Modal
  // TODO: ContextAPI
  // - Lnb 에서 선택한 키값으로 context 컨테이너에 값을 넣어주어야 함.
  // - LNB 탭 숨기는 기능
  return (
    <>
      <LNBContainer />
    </>
  );
};

export default ContentsContainer;
