import React, { FunctionComponent } from 'react';
import {
  TeskAreaWrap,
  TeskArea,
  TeskButtonGroup,
  TeskLeft,
  ButtonFoldSnb,
} from '../../../components/Contents';
import { TRightContainer } from '../../../../store/_types/Container';

const SpecialContainer: FunctionComponent<TRightContainer> = (props) => {
  const { onLNBHandler } = props;
  const { isViewLNB, handler } = onLNBHandler;

  return (
    <TeskAreaWrap isFull={!isViewLNB}>
      <TeskArea>
        <TeskButtonGroup>
          <TeskLeft>
            <ButtonFoldSnb handler={handler} />
          </TeskLeft>
        </TeskButtonGroup>
      </TeskArea>
    </TeskAreaWrap>
  );
};

export default SpecialContainer;
