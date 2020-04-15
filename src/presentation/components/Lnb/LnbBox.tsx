import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type LnbBoxList = {
  contents: string;
  link: string;
};

type TLnbBoxProps = {
  title: string;
  list: Array<LnbBoxList>;
  handler: Function;
};

// REVIEW: Component shouldn't have logic.
const LnbBox: FunctionComponent<TLnbBoxProps> = (props) => {
  const { title, list, handler } = props;

  const listClickHandler = (event: MouseEvent) => {
    event.preventDefault();
    const target = event.target as HTMLLinkElement;
    handler(target);
  };

  return (
    <Wrap>
      <LnbTitle>{title}</LnbTitle>
      <LnbList>
        {list.map((e, idx) => (
          <LnbListLi key={idx} onClick={listClickHandler}>
            <LnbItem to={e.link}>{e.contents}</LnbItem>
          </LnbListLi>
        ))}
      </LnbList>
    </Wrap>
  );
};

const Wrap = styled.div``;

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

export default LnbBox;
