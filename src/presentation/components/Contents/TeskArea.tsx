import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { TonLNBHandler, Thandler } from '../../../store/_types/Container';

// REVIEW: Component shouldn't have logic.
export const ButtonFoldSnb: FunctionComponent<TonLNBHandler> = ({
  handler,
}) => {
  const onClickHandle = () => handler();
  return (
    <ButtonFoldSnbWrap onClick={onClickHandle}>
      <span className="fold_ic"></span>
    </ButtonFoldSnbWrap>
  );
};

export const ButtonTaskSearch: FunctionComponent<Thandler> = ({ handler }) => {
  const onClickHandler = () => handler();

  return (
    <ButtonTaskSearchWrap onClick={onClickHandler}>
      <button type="button" className="ta_ic add_pt">
        <span>사진찾기</span>
      </button>
    </ButtonTaskSearchWrap>
  );
};

const ButtonTaskSearchWrap = styled.span`
  display: inline-block;
  vertical-align: top;

  button {
    height: 28px;
    border: 1px solid #cbcbcb;
    padding: 0 8px 0 9px;
    margin-right: 10px;
    line-height: 27px;
  }

  button:before {
    background-image: linear-gradient(transparent, transparent),
      url(https://ssl.pstatic.net/static/pwe/cloud/img/sprite/sp_cloudsvg_d3b6eb01.svg);
    background-size: 386px 367px;
    background-position: -90px -349px;
    width: 13px;
    height: 13px;
    position: absolute;
    top: 7px;
    left: 9px;
    width: 13px;
    height: 13px;
    content: '';

    span {
      padding-left: 25px;
      font-weight: bold;
      background-color: #f8f8f8;
    }
  }

  .ta_ic {
    padding-left: 25px;
    font-weight: bold;
    background-color: #f8f8f8;
  }

  .add_pt {
    position: relative;
  }
`;

// XXX: 스타일만 있는 껍데기들도 재활용이 되니까 컴포넌트에 넣긴 했는데 흠. 이렇게 해도 될까
export const TaskAreaWrap = styled.div`
  width: 100%;
  -ms-flex: 0 0 auto;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  display: block;
  position: relative;
  z-index: 20;
  background-color: #fff;
`;

export const TaskArea = styled.div`
  position: relative;
  border-bottom: 1px solid #dadada;
  background-color: #fff;
`;

export const TaskButtonGroup = styled.div`
  height: 28px;
  padding: 18px 4px 18px 14px;
  position: relative;
  z-index: 15;
  font-size: 0;
  text-align: center;
`;

export const TaskLeft = styled.div`
  float: left;
`;

const ButtonFoldSnbWrap = styled.a`
  display: inline-block;
  width: 30px;
  height: 30px;
  overflow: hidden;
  position: relative;
  border: 1px solid #cbcbcb;
  background-color: #fff;
  z-index: 30;
  text-align: center;
  vertical-align: top;
  margin: -2px 10px 0 0;

  :hover {
    cursor: pointer;
    background-color: #ebebeb;
  }

  .fold_ic {
    width: 16px;
    height: 12px;
    position: absolute;
    top: 9px;
    left: 7px;
    background: url(https://ssl.pstatic.net/static/pwe/ndrive/deskhome/ic_fold_sp.png)
      no-repeat 0 0;
  }
`;
