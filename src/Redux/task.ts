import { useSelector } from "react-redux";

import AppState, { Tasks } from "Interfaces/AppState";
import { Task as ITask } from "Interfaces/Task";

type Actions =
  | { type: "task/GET"; panel: string }
  | { type: "task/SET"; tasks: Array<ITask> }
  | { type: "task/UPDATE"; id: string; task: Partial<ITask> };

export const tasksReducer = (state: Tasks = {}, action: Actions): Tasks => {
  switch (action.type) {
    case "task/UPDATE":
      if (!state[action.id]) return state;

      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.task,
        },
      };
    case "task/GET":
      // Get Tasks From DB
      const tasksGeted: Array<ITask> = [];

      const newTasks: Tasks = {};

      for (const task of tasksGeted) {
        newTasks[task.id] = task;
      }

      return newTasks;
    case "task/SET":
      const tasks: Tasks = {};

      for (const task of action.tasks) {
        tasks[task.id] = task;
      }

      return tasks;
    default:
      return state;
  }
};

export const useTasks = () =>
  useSelector<AppState, Tasks>(store => store.tasks);
