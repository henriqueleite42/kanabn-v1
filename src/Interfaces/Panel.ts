export interface Panel {
  id: string;
  title: string;
  taskFieldDisplay: "id" | "title";
  columns: Array<string>;
}
