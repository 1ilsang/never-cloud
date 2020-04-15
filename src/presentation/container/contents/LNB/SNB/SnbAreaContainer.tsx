import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { LnbBox } from '../../../../components/Lnb';

const SnbAreaContainer: FunctionComponent<{}> = () => {
  // eslint-disable-next-line
  const [curClicked, setCurClicked] = useState<HTMLLinkElement>();

  // TODO: folderble 추가해줘야함.
  // TODO: music 에는 sub path url 이 존재함.
  // TODO:
  const photoList = [
    { contents: `특별한 순간`, link: `#/special` },
    { contents: `사진·동영상`, link: `#/photo/all` },
    { contents: `앨범`, link: `#/photo/album` },
    { contents: `사진 폴더`, link: `#/photo/folder` },
  ];
  const driveList = [
    { contents: `동영상`, link: `#/video` },
    { contents: `문서`, link: `#/document` },
    { contents: `음악`, link: `#/music` },
    { contents: `즐겨 찾는 파일`, link: `#/protect` },
    { contents: `모든 파일`, link: `` },
  ];
  const shareList = [
    { contents: `함께보기`, link: `#/special` },
    { contents: `공유 파일`, link: `#/special` },
  ];

  const onClickHandler = (target: HTMLLinkElement) => {
    // REVIEW: 중첩 라우팅
    const href = target.href.substring(target.href.indexOf(`#`));
    let value = '';
    if ([`#/special`, `#/photo/all`].includes(href)) value = href;
    else if (href.includes(`#/photo`)) value = `#/photo/all`;
    else value = `#/my`;

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
      <LnbBox title={`포토`} list={photoList} handler={onClickHandler} />
      <PaddingBox />
      <LnbBox title={`드라이브`} list={driveList} handler={onClickHandler} />
      <PaddingBox />
      <LnbBox title={`공유`} list={shareList} handler={onClickHandler} />
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
