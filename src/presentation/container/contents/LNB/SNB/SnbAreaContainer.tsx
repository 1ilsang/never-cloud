import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SnbAreaContainer: FunctionComponent<{}> = () => {
  // TODO: Li 클릭시 localstorage - LAST_VIEW_KEY 에 path 추가하기
  // TODO: 컴포넌트화
  // TODO: folderble 추가해줘야함.
  return (
    <LnbArea>
      <LnbBox>
        <LnbTitle>포토</LnbTitle>
        <LnbList>
          <LnbListLi>
            <LnbItem to="#/special">특별한 순간</LnbItem>
          </LnbListLi>
          <LnbListLi selected>
            <LnbItem to="#/special">사진·동영상</LnbItem>
          </LnbListLi>
          <LnbListLi>
            <LnbItem to="#/special">앨범</LnbItem>
          </LnbListLi>
          <LnbListLi>
            <LnbItem to="#/special">사진 폴더</LnbItem>
          </LnbListLi>
        </LnbList>
      </LnbBox>
      <LnbBoxTop>
        <LnbTitle>드라이브</LnbTitle>
        <LnbList>
          <LnbListLi>
            <LnbItem to="#/special">동영상</LnbItem>
          </LnbListLi>
          <LnbListLi>
            <LnbItem to="#/special">문서</LnbItem>
          </LnbListLi>
          <LnbListLi>
            <LnbItem to="#/special">음악</LnbItem>
          </LnbListLi>
          <LnbListLi>
            <LnbItem to="#/special">즐겨 찾는 파일</LnbItem>
          </LnbListLi>
          <LnbListLi>
            <LnbItem to="#/special">모든 파일</LnbItem>
          </LnbListLi>
        </LnbList>
      </LnbBoxTop>
      <LnbBoxTop>
        <LnbTitle>공유</LnbTitle>
        <LnbList>
          <LnbListLi>
            <LnbItem to="#/special">함께보기</LnbItem>
          </LnbListLi>
          <LnbListLi>
            <LnbItem to="#/special">공유 파일</LnbItem>
          </LnbListLi>
        </LnbList>
      </LnbBoxTop>
    </LnbArea>
  );
};

const LnbArea = styled.div`
  padding: 22px 0 17px;
  border-top: 1px solid #eee;
`;

const LnbBox = styled.div``;

const LnbTitle = styled.h2`
  margin: 0 auto;
  padding: 0 25px;
  font-size: 12px;
  font-weight: normal;
  line-height: 15px;
  color: #888;
`;

const LnbList = styled.ul`
  padding: 0;
  padding-top: 7px;
  list-style: none;
  margin: 0 auto;
`;

const LnbListLi = styled.li<any>`
  display: block;
  margin: 0 auto;
  margin-top: 2px;
  color: #222;

  ${props => props.selected && 'color: #418cff; font-weight: bold;'}
`;

const LnbItem = styled(Link)`
  position: relative;
  display: block;
  padding: 4px 25px 5px;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const LnbBoxTop = styled(LnbBox)`
  padding-top: 27px;
`;

export default SnbAreaContainer;
