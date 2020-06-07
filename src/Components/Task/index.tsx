import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";

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
  return (
    <Draggable draggableId={id} index={order}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <Container
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
