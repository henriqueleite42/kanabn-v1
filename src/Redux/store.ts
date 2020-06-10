import { createStore, combineReducers } from "redux";

import { stateReducer } from "./state";
import { tasksReducer } from "./task";

const reducers = {
  state: stateReducer,
  tasks: tasksReducer,
};

export type AppState = {
  [T in keyof typeof reducers]: ReturnType<typeof reducers[T]>;
};

export default createStore(combineReducers<AppState>(reducers));
