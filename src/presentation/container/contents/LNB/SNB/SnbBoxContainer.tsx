import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { getLastViewKey } from '../../../../../utils/helpers/SnbAreaContainer';

type SnbBoxList = {
  contents: string;
  link: string;
};

type TSnbBoxProps = {
  title: string;
  list: Array<SnbBoxList>;
};

const SnbBoxContainer: FunctionComponent<TSnbBoxProps> = (props) => {
  const { title, list } = props;
  const history = useHistory();
  const curPath = history.location.pathname;

  const listClickHandler = (event: MouseEvent) => {
    event.preventDefault();
    const target = event.target as HTMLLinkElement;
    const href = target.href.substring(target.href.indexOf(`#`) + 1);
    const value = getLastViewKey(href);

    window.localStorage.setItem(`LAST_VIEW_KEY`, value);
  };

  return (
    <Wrap>
      <SnbTitle>{title}</SnbTitle>
      <SnbList>
        {list.map((e, idx) => (
          <SnbListLi
            key={idx}
            onClick={listClickHandler}
            isSelected={e.link === curPath}
          >
            <SnbItem to={e.link}>{e.contents}</SnbItem>
          </SnbListLi>
        ))}
      </SnbList>
    </Wrap>
  );
};

const Wrap = styled.div``;

const SnbTitle = styled.h2`
  margin: 0 auto;
  padding: 0 25px;
  font-size: 12px;
  font-weight: normal;
  line-height: 15px;
  color: #888;
`;

const SnbList = styled.ul`
  padding: 0;
  padding-top: 7px;
  list-style: none;
  margin: 0 auto;
`;

const SnbListLi = styled.li<{ isSelected: boolean } & any>`
  display: block;
  margin: 0 auto;
  margin-top: 2px;

  ${({ isSelected }) =>
    isSelected
      ? `color: #418cff; font-weight: bold`
      : `color: #222; font-weight: 400`}
};
`;

const SnbItem = styled(Link)`
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

export default SnbBoxContainer;
