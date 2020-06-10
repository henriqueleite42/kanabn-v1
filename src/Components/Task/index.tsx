import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

import { Panel as IPanel } from "Interfaces/Panel";
import { Task as ITask } from "Interfaces/Task";

import { Container } from "./style";

interface Props {
  id: string;
  order: number;
  taskFieldDisplay: IPanel["taskFieldDisplay"];
  task: ITask;
}

const Task: React.FC<Props> = ({ order, id, taskFieldDisplay, task }) => {
  const dispatch = useDispatch();

  return (
    <Draggable draggableId={id} index={order}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <Container
          onClick={() =>
            dispatch({
              type: "state/MODAL",
              open: true,
            })
          }
          color={task.color}
          ref={innerRef}
          {...draggableProps}
          {...dragHandleProps}
        >
          <p>{task[taskFieldDisplay]}</p>
        </Container>
      )}
    </Draggable>
  );
};

export default memo(Task);
