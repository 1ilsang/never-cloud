import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

const PhotoTitleContainer: FunctionComponent<{}> = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const modalToggleHandler = () => setIsOpenModal(!isOpenModal);

  return (
    <Wrap>
      <h2>
        <span>
          <LinkBox href={`/photo/all?time=${Date.now()}`} title="촬영일별 보기">
            촬영일별 보기
          </LinkBox>
        </span>{' '}
        <span className="gt">&gt;</span>{' '}
        <span className="year_grup">
          <LinkBox onClick={modalToggleHandler} title="전체 년도">
            전체 년도 <YearWrap>년도 선택</YearWrap>
          </LinkBox>
          <YearSelectModal open={isOpenModal}>
            <ul>
              <li>
                <LinkBox href="">전체</LinkBox>
              </li>
            </ul>
          </YearSelectModal>
        </span>
      </h2>
    </Wrap>
  );
};

const Wrap = styled.div`
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  display: block;
  position: relative;
  display: block;
  height: 36px;
  border-bottom: 1px solid #dadada;
  z-index: 11;

  h2 {
    display: inline-block;
    float: left;
    margin: 9px 0 0 14px;
    font-size: 12px;
    font-weight: normal;
    line-height: 18px;
    color: #333;
    vertical-align: middle;
    white-space: nowrap;

    .gt {
      margin-left: 4px;
      font-weight: 400;
    }
  }

  .year_grup {
    display: inline-block;
    position: relative;
    margin-left: 4px;
  }
`;

const YearWrap = styled.span`
  background-image: linear-gradient(transparent, transparent),
    url(https://ssl.pstatic.net/static/pwe/cloud/img/sprite/sp_cloudsvg_d3b6eb01.svg);
  background-size: 386px 367px;
  background-position: -371px -143px;
  width: 7px;
  height: 4px;
  display: inline-block;
  overflow: hidden;
  margin: -2px 0 0 1px;
  text-indent: -500px;
  vertical-align: middle;
`;

const LinkBox = styled.a`
  color: #333;
  text-decoration: none;
  cursor: pointer;
`;

const YearSelectModal = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  right: -3px;
  font-weight: 400;
  width: 67px;
  max-height: 322px;
  overflow: hidden;
  overflow-y: auto;
  position: absolute;
  top: 23px;
  border: solid 1px #d9d9d9;
  background-color: #fff;
  line-height: 18px;
  z-index: 31;
  -webkit-box-shadow: 1.4px 1.4px 2px 0 rgba(0, 0, 0, 0.15);
  box-shadow: 1.4px 1.4px 2px 0 rgba(0, 0, 0, 0.15);

  ul {
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    position: relative;
    clear: both;
    float: none !important;

    a {
      height: 28px;
      padding: 0 8px;
      font-size: 12px;
      color: #333;
      line-height: 28px;
      white-space: nowrap;
      text-decoration: none;
    }
  }
`;

export default PhotoTitleContainer;
