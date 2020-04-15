import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const FooterContainer: FunctionComponent<{}> = () => {
  return (
    <Footer>
      <QuickTools>
        <a
          href="https://cloud.naver.com/mycapacity.nhn?openerType=main"
          target="_blank"
          rel="noopener noreferrer"
        >
          환경설정
        </a>
        <span className="bar">|</span>
        스킨설정
        <span className="bar">|</span>
        모바일앱
        <span className="bar">|</span>
        윈도 탐색기
        <span className="bar">|</span>맥 탐색기
      </QuickTools>
      <address>
        Copyright ⓒ{' '}
        <a
          href="https://www.navercorp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NEVER Corp.
        </a>{' '}
        All Rights Reserved.
      </address>
      <QuickLink>
        <i className="ic_n">NEW</i>
        <a
          href="https://cloud.naver.com/notice.nhn"
          target="_blank"
          rel="noopener noreferrer"
        >
          공지사항
        </a>
        <span className="bar">|</span>
        <a
          href="https://help.naver.com/support/service/main.help?serviceNo=636"
          target="_blank"
          rel="noopener noreferrer"
        >
          고객센터
        </a>
        <span className="bar">|</span>
        <a
          href="https://help.naver.com/support/contents/contents.help?serviceNo=636&categoryNo=2394"
          target="_blank"
          rel="noopener noreferrer"
        >
          결제문의
        </a>
        <span className="bar">|</span>
        <a
          href="https://help.pay.naver.com/mail/form.help?alias=checkout_accuse"
          target="_blank"
          rel="noopener noreferrer"
        >
          결제도용신고
        </a>
        <span className="bar">|</span>
        <a
          href="https://help.naver.com/support/reportCenter/home.help"
          target="_blank"
          rel="noopener noreferrer"
        >
          신고하기
        </a>
      </QuickLink>
    </Footer>
  );
};

const Footer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 29px;
  border-top: 1px solid #b5b5b5;
  background: #fff;
  z-index: 25;

  .bar {
    display: inline-block;
    margin: 0 5px 0 3px;
    color: #dadada;
  }

  address {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 2;
    order: 2;
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    display: block;
    padding-top: 8px;
    font-family: verdana, sans-serif;
    font-size: 9px;
    color: #8a8a8a;
    text-align: center;
    font-style: normal;

    a {
      font-family: tahoma, sans-serif;
      font-size: 9px;
      color: #2cb400;
      font-weight: bold;
      text-decoration: none;
    }
  }
`;

const QuickTools = styled.div`
  -webkit-box-ordinal-group: 1;
  -ms-flex-order: 1;
  order: 1;
  padding: 7px 0 0 18px;
  background: #fff;
  font-size: 11px;
  line-height: 14px;
  color: #8a8a8a;
  letter-spacing: -1px;
  white-space: nowrap;

  a {
    display: inline-block;
    font-size: 11px;
    letter-spacing: -1px;
    color: #8a8a8a;
    text-decoration: none;
  }
`;

const QuickLink = styled.div`
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 3;
  order: 3;
  padding: 7px 10px 0 0;
  font-size: 11px;
  line-height: 14px;
  color: #8a8a8a;
  letter-spacing: -1px;
  white-space: nowrap;

  .ic_n {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: url(https://ssl.pstatic.net/static/pwe/ndrive/deskhome/sp_ico_new2.png)
      no-repeat 0 0;
    vertical-align: middle;
    overflow: hidden;
    white-space: nowrap;
    text-indent: 100%;
  }

  a {
    display: inline-block;
    font-size: 11px;
    letter-spacing: -1px;
    color: #8a8a8a;
    text-decoration: none;
  }
`;
export default FooterContainer;
