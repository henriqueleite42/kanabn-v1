import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { Container } from "./style";

interface Props {
  id: string;
  order: number;
  title: string;
}

const Task: React.FC<Props> = ({ order, id, title }) => {
  return (
    <Draggable draggableId={id} index={order}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <Container ref={innerRef} {...draggableProps} {...dragHandleProps}>
          <p>{title}</p>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
