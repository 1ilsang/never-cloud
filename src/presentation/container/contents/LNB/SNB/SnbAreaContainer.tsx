import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import SnbBoxContainer from './SnbBoxContainer';
import { SNBData } from '../../../../../utils/helpers/SnbAreaContainer';

const SnbAreaContainer: FunctionComponent<{}> = () => {
  // TODO: folderble 추가해줘야함.
  // TODO: music 에는 sub path url 이 존재함.

  return (
    <LnbArea>
      <SnbBoxContainer title={SNBData.photo.title} list={SNBData.photo.list} />
      <PaddingBox />
      <SnbBoxContainer title={SNBData.drive.title} list={SNBData.drive.list} />
      <PaddingBox />
      <SnbBoxContainer title={SNBData.share.title} list={SNBData.share.list} />
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
