import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

import Task from "Components/Task";

import { Task as ITask } from "Interfaces/Task";

import { Container, TaskList, Title } from "./style";

interface Props {
  id: string;
  title: string;
  order: number;
  tasks: Array<ITask>;
}

const Column: React.FC<Props> = ({ id, title, order, tasks }) => {
  return (
    <Draggable draggableId={id} index={order}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <Container ref={innerRef} {...draggableProps} {...dragHandleProps}>
          <Title>{title}</Title>
          <Droppable droppableId={id} type="task">
            {({ innerRef, placeholder, droppableProps }) => (
              <TaskList ref={innerRef} {...droppableProps}>
                {tasks.map((task, index) => (
                  <Task
                    key={task.id}
                    id={task.id}
                    order={index}
                    title={task.title}
                  />
                ))}
                {placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};

export default Column;
