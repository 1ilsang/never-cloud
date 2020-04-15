import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const CorpInfo: FunctionComponent<{}> = () => {
  return (
    <CorpInfoArea>
      <p>사업자등록번호 : XXX-XX-XXXXX</p>
      <p>
        통신판매업 신고번호 :<br />
        경기 성남 제 XXXX-XXX호
      </p>
      <p>상호 : 네버(주)</p>
      <p>대표이사 : 이상출</p>
      <p>대표전화 : XXXX-XXXX</p>
      <p>이메일 : 1ilsang@naver.com</p>
      <p>
        주소 :<br />
        우리구 우리동 우리집 - 우리
      </p>
      <p>-</p>
      <p>
        <a
          href="/html/operatePrinciple.ko.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          클라우드 이용약관
        </a>
      </p>
      <p>
        <a
          href="https://cloud.naver.com/html/operatePrinciple.ko.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          유료상품 이용약관
        </a>
      </p>
      <p>
        <a
          href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2208162517"
          target="_blank"
          rel="noopener noreferrer"
        >
          사업자등록정보
        </a>
      </p>
      <p>
        <a
          href="http://www.naver.com/rules/privacy.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>개인정보처리방침</strong>
        </a>
      </p>
    </CorpInfoArea>
  );
};

const CorpInfoArea = styled.div`
  padding: 22px 25px;
  border-top: 1px solid #eee;

  p {
    font-size: 11px;
    line-height: 15px;
    color: #999;
    letter-spacing: -0.3px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:after {
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
    background-position: -371px -169px;
    width: 3px;
    height: 5px;
    content: '';
    display: inline-block;
    margin: 5px 0 0 3px;
    vertical-align: top;
  }
`;

export default CorpInfo;
