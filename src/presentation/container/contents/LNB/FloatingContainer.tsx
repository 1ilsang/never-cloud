import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FloatingContainer: FunctionComponent<{}> = () => {
  return (
    <Wrap>
      <LinkClear to="#/cleanup/big-file">파일 정리</LinkClear>
      <LinkTrash to="#/recycle-bin">휴지통</LinkTrash>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 66px;
  padding: 0 14px;
  border-top: 1px solid #ddd;

  a {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
    display: block;
    height: 100%;
    padding-top: 40px;
    font-size: 11px;
    line-height: 13px;
    color: #222;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    :before {
      content: '';
      position: absolute;
      top: 12px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
`;

const LinkClear = styled(Link)`
  :before {
    background-image: url(https://ssl.pstatic.net/static/pwe/cloud/img/sprite/sp_cloudsvg_86c1aad7.png);
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(transparent),
        to(transparent)
      ),
      url(https://ssl.pstatic.net/static/pwe/cloud/img/sprite/sp_cloudsvg_d3b6eb01.svg);
    background-image: linear-gradient(transparent, transparent),
      url(https://ssl.pstatic.net/static/pwe/cloud/img/sprite/sp_cloudsvg_d3b6eb01.svg);
    background-size: 386px 367px;
    background-position: -314px -4px;
    width: 21px;
    height: 21px;
  }
`;

const LinkTrash = styled(Link)`
  :before {
    background-image: url(https://ssl.pstatic.net/static/pwe/cloud/img/sprite/sp_cloudsvg_86c1aad7.png);
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(transparent),
        to(transparent)
      ),
      url(https://ssl.pstatic.net/static/pwe/cloud/img/sprite/sp_cloudsvg_d3b6eb01.svg);
    background-image: linear-gradient(transparent, transparent),
      url(https://ssl.pstatic.net/static/pwe/cloud/img/sprite/sp_cloudsvg_d3b6eb01.svg);
    background-size: 386px 367px;
    background-position-x: -314px;
    background-position-y: -207px;
    width: 21px;
    height: 21px;
  }
`;

export default FloatingContainer;
