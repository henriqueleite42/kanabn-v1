import { Panel as IPanel } from "Interfaces/Panel";
import { Task as ITask } from "Interfaces/Task";

export interface State {
  theme: "dark" | "light";
  language: "EN" | "BR";
  modalOpen: boolean;
  panel?: IPanel;
  taskID?: string;
}

export interface User {
  id: string;
}

export interface Tasks {
  [key: string]: ITask;
}

export default interface AppState {
  state: State;
  user: User;
  tasks: Tasks;
}
