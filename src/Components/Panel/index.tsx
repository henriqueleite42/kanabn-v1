import React, { useState, useEffect, useCallback } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

import Button from "Components/Button";
import Column from "Components/Column";

import { Column as IColumn } from "Interfaces/Column";
import { Panel as IPanel } from "Interfaces/Panel";
import { Task as ITask } from "Interfaces/Task";

import { Title, Container, ColumnList } from "./style";

import {
  columns as TempColumns,
  panel as TempPanel,
  tasks as TempTasks,
} from "Temp/initialData";

const Panel: React.FC<{ id: string }> = ({ id }) => {
  const [panel, setPanel] = useState<IPanel>();
  const [columns, setColumns] = useState<Array<IColumn>>([]);
  const [tasks, setTasks] = useState<{ [key: string]: ITask }>({});

  const addColumn = useCallback(() => {
    // TODO: Send Request to Create Column

    const newColumn = {
      id: `column${columns.length + 1}`,
      title: `Column ${columns.length + 1}`,
      tasks: [],
    };

    setColumns(prevState => [...prevState, newColumn]);
  }, [columns.length]);

  const addTask = useCallback(
    (order: number) => {
      // TODO: Send Request to Create Task
      const newTask = {
        id: `task${Object.keys(tasks).length + 1}`,
        title: `Task ${Object.keys(tasks).length + 1}`,
        attibutes: {
          hasDescription: false,
          hasComments: 0,
          hasAttachments: 0,
        },
      };

      const newColumns = columns.slice();

      newColumns[order].tasks.push(newTask.id);

      setColumns(newColumns);
      setTasks(prevState => ({
        ...prevState,
        [newTask.id]: newTask,
      }));
    },
    [columns, tasks],
  );

  const changeColumnOrder = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;

      const {
        source: { index: sourceIndex, droppableId: sourceId },
        destination: { index: destIndex, droppableId: destId },
        type,
        draggableId,
      } = result;

      if (sourceId === destId && sourceIndex === destIndex) return;

      const newColumns = columns.slice();

      if (type === "column") {
        const column = newColumns.find(column => column.id === draggableId);
        newColumns.splice(sourceIndex, 1);
        newColumns.splice(destIndex, 0, column as IColumn);
      } else {
        const sourceColumn = columns.findIndex(
          column => column.id === sourceId,
        );
        const destColumn = columns.findIndex(column => column.id === destId);

        newColumns[sourceColumn].tasks.splice(sourceIndex, 1);
        newColumns[destColumn].tasks.splice(destIndex, 0, draggableId);
      }

      setColumns(newColumns);
    },
    [columns],
  );

  useEffect(() => {
    setPanel(TempPanel);

    const columns = [];

    for (const id of TempPanel.columns) {
      columns.push(TempColumns[id]);
    }

    setColumns(columns);

    setTasks(TempTasks);
  }, []);

  return (
    <Container>
      <Title>{panel?.title}</Title>
      <DragDropContext onDragEnd={changeColumnOrder}>
        <Droppable droppableId={id} direction="horizontal" type="column">
          {({ innerRef, placeholder, droppableProps }) => (
            <ColumnList ref={innerRef} {...droppableProps}>
              {columns.map((column, index) => (
                <Column
                  key={column.id}
                  id={column.id}
                  order={index}
                  title={column.title}
                  addTask={addTask}
                  tasks={tasks ? column.tasks.map(id => tasks[id]) : []}
                  taskFieldDisplay={panel?.taskFieldDisplay || "title"}
                />
              ))}
              {placeholder}
              <Button
                width="350px"
                variant="dashed"
                size="lg"
                onClick={addColumn}
              >
                Add Column
              </Button>
            </ColumnList>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default Panel;
