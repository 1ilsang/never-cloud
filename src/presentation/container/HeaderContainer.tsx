import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

type THeaderContainer = { history: RouteComponentProps['history'] };

const HeaderContainer: FunctionComponent<THeaderContainer> = (props) => {
  const { history } = props;
  const logoutHandler = () => {
    console.info(`logout!`);
    window.sessionStorage.removeItem(`user`);
    history.push('/');
  };
  const gotoMainHandler = () => {
    window.location.href = '/';
  };

  return (
    <Wrap>
      <H1Title onClick={gotoMainHandler}>NEVER 클라우드</H1Title>
      <LoginGroup>
        <LoginGnb>
          <LoginGnbList>
            <LoginGnbLi>
              <GnbLogoutSpan onClick={logoutHandler}>Logout</GnbLogoutSpan>
            </LoginGnbLi>
          </LoginGnbList>
        </LoginGnb>
      </LoginGroup>
      <GnbArea>
        <GnbListBox>
          <GnbFirst>
            <GnbUl>
              <GnbLiMail />
              <GnbLiCalender />
              <GnbLiMemo />
              <GnbLiAddress />
              <GnbLiCloud onClick={gotoMainHandler} />
              <GnbLiOffice />
              <GnbLiMoneyBook />
            </GnbUl>
          </GnbFirst>
        </GnbListBox>
      </GnbArea>
    </Wrap>
  );
};

const Wrap = styled.div`
  z-index: 50;
  height: 55px;
  min-width: 1011px;
  background-color: #418cff;
  position: relative;
`;

const H1Title = styled.h1`
  position: absolute;
  left: 0;
  top: 0;
  height: 34px;
  margin-left: 15px;
  margin-top: 15px;
  z-index: 30;
  font-size: 1.6em;
  overflow: hidden;
  color: white;
  cursor: pointer;
`;

const LoginGroup = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
  z-index: 20;
  white-space: nowrap;
`;

const LoginGnb = styled.div`
  position: relative;
  z-index: 2147483646;
  font-family: '나눔고딕', NanumGothic, '돋움', Dotum, 'Apple SD Gothic Neo',
    Helvetica, Sans-serif !important;
  color: #444;
  font-size: 12px;
  letter-spacing: 0 !important;
  line-height: normal !important;
  text-align: left !important;
`;

const LoginGnbList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  zoom: 1;
`;

const LoginGnbLi = styled.li`
  padding: 17px 21px 10px 1px;
`;

const GnbLogoutSpan = styled.span`
  color: white;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.3em;
`;

const GnbArea = styled.div`
  position: relative;
  height: 55px;
  padding: 0 265px 0 176px;
  background-repeat: repeat-x;
  z-index: 10;
  zoom: 1;
`;

const GnbListBox = styled.div`
  position: relative;
  text-align: center;
  white-space: nowrap;
  font-size: 0;
  zoom: 1;
`;

const GnbFirst = styled.div`
  display: inline-block;
  vertical-align: top;
  *display: inline;
  zoom: 1;
  text-align: left;
`;

const GnbUl = styled.ul`
  height: 55px;
  font-size: 0;
  white-space: nowrap;
  *display: inline;
  *zoom: 1;
`;

const GnbLi = styled.li`
  float: left;
  margin-right: 15px;
  zoom: 1;
  text-align: center;
  background-image: url(https://ssl.pstatic.net/static/pwe/common/sp_pnb_c9510776.png);
  background-size: 312px 256px;
  z-index: 50;
  width: 33px;
  height: 29px;
  display: inline-block;
  margin-top: 13px;
  position: relative;
`;

const GnbLiMail = styled(GnbLi)`
  background-position: -231px -140px;
`;

const GnbLiCalender = styled(GnbLi)`
  background-position: -99px -206px;
`;

const GnbLiMemo = styled(GnbLi)`
  background-position: 0px -173px;
`;

const GnbLiAddress = styled(GnbLi)`
  background-position: -33px -140px;
`;

const GnbLiCloud = styled(GnbLi)`
  background-position: -66px -140px;
  cursor: pointer;
`;
const GnbLiOffice = styled(GnbLi)`
  background-position: -198px -173px;
`;
const GnbLiMoneyBook = styled(GnbLi)`
  background-position: -66px -173px;
`;

export default HeaderContainer;
