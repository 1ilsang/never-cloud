import React, { FunctionComponent } from 'react';
import {
  TaskAreaWrap,
  TaskArea,
  TaskButtonGroup,
  TaskLeft,
  ButtonTaskSearch,
  ButtonFoldSnb,
} from '../../../components/Contents';

const TaskContainer: FunctionComponent<{
  onLNBHandler: Function;
  onSearchHandler: Function;
}> = ({ onLNBHandler, onSearchHandler }) => {
  return (
    <TaskAreaWrap>
      <TaskArea>
        <TaskButtonGroup>
          <TaskLeft>
            <ButtonFoldSnb handler={onLNBHandler} />
            <span
              className="check_all"
              title="사진을 1000개씩 선택할 수 있습니다."
            >
              <input type="checkbox" id="check_all" className="input_check" />
            </span>
            <ButtonTaskSearch handler={onSearchHandler} />
          </TaskLeft>
        </TaskButtonGroup>
      </TaskArea>
    </TaskAreaWrap>
  );
};

export default TaskContainer;
