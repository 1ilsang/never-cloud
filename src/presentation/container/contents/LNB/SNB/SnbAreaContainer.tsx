import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { LnbBox } from '../../../../components/Lnb';
import {
  SNBList,
  getLastViewKey,
} from '../../../../../utils/helpers/SnbAreaContainer';

const SnbAreaContainer: FunctionComponent<{}> = () => {
  // eslint-disable-next-line
  const [curClicked, setCurClicked] = useState<HTMLLinkElement>();

  // TODO: folderble 추가해줘야함.
  // TODO: music 에는 sub path url 이 존재함.
  const onClickHandler = (target: HTMLLinkElement) => {
    // REVIEW: 중첩 라우팅
    const href = target.href.substring(target.href.indexOf(`#`) + 1);
    const value = getLastViewKey(href);

    // REVIEW: Immutable
    setCurClicked((prev) => {
      if (prev) {
        prev.style.color = `#222`;
        prev.style.fontWeight = `400`;
      }
      target.style.color = `#418cff`;
      target.style.fontWeight = `bold`;
      return target;
    });

    window.localStorage.setItem(`LAST_VIEW_KEY`, value);
  };

  return (
    <LnbArea>
      <LnbBox
        title={`포토`}
        list={SNBList.photoList}
        handler={onClickHandler}
      />
      <PaddingBox />
      <LnbBox
        title={`드라이브`}
        list={SNBList.driveList}
        handler={onClickHandler}
      />
      <PaddingBox />
      <LnbBox
        title={`공유`}
        list={SNBList.shareList}
        handler={onClickHandler}
      />
    </LnbArea>
  );
};

const LnbArea = styled.div`
  padding: 22px 0 17px;
  border-top: 1px solid #eee;
`;

const PaddingBox = styled.div`
  padding-top: 27px;
`;

export default SnbAreaContainer;
