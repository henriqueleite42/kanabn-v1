import { useSelector } from "react-redux";

import AppState, { State } from "Interfaces/AppState";
import { Panel as IPanel } from "Interfaces/Panel";

type Actions =
  | { type: "state/NAV_OPEN" }
  | { type: "state/THEME"; theme: "dark" | "light" }
  | { type: "state/LANGUAGE"; language: "EN" | "BR" }
  | { type: "state/MODAL"; open: boolean }
  | { type: "state/SET_PANEL"; panel: IPanel };

const INITIAL: State = {
  theme: "dark",
  language: "EN",
  modalOpen: false,
};

export const stateReducer = (state = INITIAL, action: Actions): State => {
  switch (action.type) {
    case "state/THEME":
      return { ...state, theme: action.theme };
    case "state/LANGUAGE":
      return { ...state, language: action.language };
    case "state/MODAL":
      return { ...state, modalOpen: action.open };
    case "state/SET_PANEL":
      return { ...state, panel: action.panel };
    default:
      return state;
  }
};

export const useGlobalState = () =>
  useSelector<AppState, State>(store => store.state);
