import { createStore, combineReducers } from "redux";

import { stateReducer } from "./state";

const reducers = {
  state: stateReducer
};

export type AppState = {
  [T in keyof typeof reducers]: ReturnType<typeof reducers[T]>;
};

export default createStore(combineReducers<AppState>(reducers));
