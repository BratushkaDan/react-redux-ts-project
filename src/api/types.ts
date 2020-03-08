export interface ITodo {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}
export interface ITodoQueryParams {
  limit?: number;
  offset?: number;
}