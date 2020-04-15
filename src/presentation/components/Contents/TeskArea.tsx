import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { TonLNBHandler } from '../../../store/_types/Container';

// XXX: 스타일만 있는 껍데기들도 재활용이 되니까 컴포넌트에 넣긴 했는데 흠. 이렇게 해도 될까
export const TeskAreaWrap = styled.div<{ isFull: boolean }>`
  left: ${(props) => (props.isFull ? `-250px` : `0px`)};

  -ms-flex: 0 0 auto;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  display: block;
  position: relative;
  z-index: 20;
  background-color: #fff;
`;

export const TeskArea = styled.div`
  position: relative;
  border-bottom: 1px solid #dadada;
  background-color: #fff;
`;

export const TeskButtonGroup = styled.div`
  height: 28px;
  padding: 18px 4px 18px 14px;
  position: relative;
  z-index: 15;
  font-size: 0;
  text-align: center;
`;

export const TeskLeft = styled.div`
  float: left;
`;

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
