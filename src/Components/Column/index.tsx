import React, { memo } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

import Button from "Components/Button";
import Task from "Components/Task";

import { Panel as IPanel } from "Interfaces/Panel";
import { Task as ITask } from "Interfaces/Task";

import { Container, TaskList, Title } from "./style";

interface Props {
  id: string;
  title: string;
  order: number;
  tasks: Array<ITask>;
  addTask: (order: number) => void;
  taskFieldDisplay: IPanel["taskFieldDisplay"];
}

const Column: React.FC<Props> = ({
  id,
  title,
  order,
  tasks,
  addTask,
  taskFieldDisplay,
}) => {
  return (
    <Draggable draggableId={id} index={order}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <Container ref={innerRef} {...draggableProps} {...dragHandleProps}>
          <Title>{title}</Title>
          <Droppable droppableId={id} type="task">
            {({ innerRef, placeholder, droppableProps }) => (
              <TaskList ref={innerRef} {...droppableProps}>
                {tasks.length >= 10 && (
                  <Button
                    isBlock
                    size="lg"
                    variant="dashed"
                    onClick={() => addTask(order)}
                  >
                    Add Task
                  </Button>
                )}
                {tasks.map((task, index) => (
                  <Task
                    key={task.id}
                    id={task.id}
                    order={index}
                    taskFieldDisplay={taskFieldDisplay}
                    task={task}
                  />
                ))}
                {placeholder}
                <Button
                  isBlock
                  size="lg"
                  variant="dashed"
                  onClick={() => addTask(order)}
                >
                  Add Task
                </Button>
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};

export default memo(Column);
