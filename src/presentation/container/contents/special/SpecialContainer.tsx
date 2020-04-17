import React, { FunctionComponent } from 'react';
import {
  TaskAreaWrap,
  TaskArea,
  TaskButtonGroup,
  TaskLeft,
  ButtonTaskSearch,
  ButtonFoldSnb,
} from '../../../components/Contents';
import { TRightContainer } from '../../../../store/_types/Container';

const SpecialContainer: FunctionComponent<TRightContainer> = (props) => {
  const { onLNBHandler } = props;
  const { handler } = onLNBHandler;

  const searchHandler = () => console.log(`Open search wrap`);

  return (
    <TaskAreaWrap>
      <TaskArea>
        <TaskButtonGroup>
          <TaskLeft>
            <ButtonFoldSnb handler={handler} />
            <ButtonTaskSearch handler={searchHandler} />
          </TaskLeft>
        </TaskButtonGroup>
      </TaskArea>
    </TaskAreaWrap>
  );
};

export default SpecialContainer;
