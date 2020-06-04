import { useSelector } from "react-redux";

import AppState, { State } from "Interfaces/AppState";

type Actions =
  | { type: "state/NAV_OPEN" }
  | { type: "state/THEME"; theme: "dark" | "light" }
  | { type: "state/LANGUAGE"; language: "EN" | "BR" };

const INITIAL: State = {
  theme: "light",
  language: "EN"
};

export const stateReducer = (state = INITIAL, action: Actions): State => {
  switch (action.type) {
    case "state/THEME":
      return { ...state, theme: action.theme };
    case "state/LANGUAGE":
      return { ...state, language: action.language };
    default:
      return state;
  }
};

export const useGlobalState = () =>
  useSelector<AppState, State>(store => store.state);
