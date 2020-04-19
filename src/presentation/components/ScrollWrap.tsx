import styled from 'styled-components';

export const ScrollWrap = styled.div`
  overflow-y: scroll;
  height: 100%;

  ::-webkit-scrollbar-thumb {
    background-color: #c9c9c9;
    border-radius: 8px;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }
`;
