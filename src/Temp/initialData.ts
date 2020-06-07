import { Column } from "Interfaces/Column";
import { Panel } from "Interfaces/Panel";
import { Task } from "Interfaces/Task";

export const tasks: { [key: string]: Task } = {
  task1: {
    id: "task1",
    title: "Task 1",
    attibutes: {
      hasDescription: false,
      hasComments: 0,
      hasAttachments: 0,
    },
  },
  task2: {
    id: "task2",
    title: "Task 2",
    attibutes: {
      hasDescription: false,
      hasComments: 0,
      hasAttachments: 0,
    },
  },
  task3: {
    id: "task3",
    title: "Task 3",
    attibutes: {
      hasDescription: false,
      hasComments: 0,
      hasAttachments: 0,
    },
  },
  task4: {
    id: "task4",
    title: "Task 4",
    attibutes: {
      hasDescription: false,
      hasComments: 0,
      hasAttachments: 0,
    },
  },
};

export const columns: { [key: string]: Column } = {
  column1: {
    id: "column1",
    title: "Column 1",
    tasks: ["task1", "task2"],
  },
  column2: {
    id: "column2",
    title: "Column 2",
    tasks: ["task3", "task4"],
  },
};

export const panel: Panel = {
  id: "panel1",
  title: "Panel 1",
  columns: ["column1", "column2"],
};
