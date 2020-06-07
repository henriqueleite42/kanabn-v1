import React, { useState, useEffect, useCallback } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

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
  const [tasks, setTasks] = useState<{ [key: string]: ITask }>({});
  const [columns, setColumns] = useState<Array<IColumn>>([]);
  const [panel, setPanel] = useState<IPanel>();

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
                  tasks={tasks ? column.tasks.map(id => tasks[id]) : []}
                />
              ))}
              {placeholder}
            </ColumnList>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default Panel;
