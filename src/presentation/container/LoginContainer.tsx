import React, { FunctionComponent, useState, useRef } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import { debounce } from '../../utils/Functions';

type TLoginContainer = {
  history: RouteComponentProps['history'];
};

const LoginContainer: FunctionComponent<TLoginContainer> = ({ history }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const notiSpanRef = useRef<HTMLSpanElement>(null);
  const debounceTimes = 500;
  const idDebounce = useRef(
    debounce((value: string) => {
      // REVIEW: Something Async logic...
      console.info(`Debounce!`, value);
    }, debounceTimes),
  );

  const onChangeIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // REVIEW: persist 를 사용하면 비동기에도 e 객체를 가지고 있으나, 메모리에 남아 성능 이슈가 생긴다.
    // e.persist();
    const value = e.target?.value;
    idDebounce.current(value);
    setId(value);
    console.info(`Not Debounce`, value);
  };

  const onChangePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickHandler = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    if (id === `elsa` && password === `anna`) {
      window.sessionStorage.setItem(`user`, `🥰`);
      history.push('/');
      return;
    }
    // REVIEW: Repaint - visibility vs display none;
    if (notiSpanRef && notiSpanRef.current)
      notiSpanRef.current.style.display = `block`;
    console.info(`Repaint - Doesn't Reflow`);
  };

  return (
    <Wrap>
      <Header>NEVER</Header>
      <Container>
        <Content>
          <InputText placeholder="아이디" onChange={onChangeIdHandler} />
          <InputText
            placeholder="비밀번호"
            onChange={onChangePasswordHandler}
            type="password"
          />
          <NotiSpan ref={notiSpanRef} id="noti">
            비밀번호 혹은 아이디가 잘못되었습니다.
          </NotiSpan>
          <InputSubmit onClick={onClickHandler} />
        </Content>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 768px;
  margin: 0 auto;
  font-family: Helvetica, Dotum, sans-serif;
  font-size: 12px;
`;

const NotiSpan = styled.span`
  color: red;
  display: none;
`;

const Header = styled.div`
  position: relative;
  height: 168px;
  padding: 62px 0 0;
  text-align: center;
  color: #03c75a;
  font-size: 100px;
  font-weight: 900;
`;

const Container = styled.div`
  padding-bottom: 50px;
  min-height: 185px;
`;

const Content = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-bottom: 30px;
`;

const InputText = styled.input`
  position: relative;
  height: 29px;
  margin: 0 0 14px;
  padding: 10px 35px 10px 15px;
  border: solid 1px #dadada;
  background: #fff;
  width: 90%;
  font-size: 15px;
  line-height: 16px;
`;

const InputSubmit = styled.input.attrs({
  type: `submit`,
  value: `로그인`,
})`
  display: block;
  width: 100%;
  height: 61px;
  margin: 30px 0 14px;
  padding-top: 1px;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
  cursor: pointer;
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 61px;
`;

export default LoginContainer;
