export interface State {
  theme: "dark" | "light";
  language: "EN" | "BR";
}

export interface User {
  id: string;
}

export default interface AppState {
  state: State;
  user: User;
}
