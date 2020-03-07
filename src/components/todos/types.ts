export interface ITodo {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

type ITodos = Array<ITodo>;

export interface IQueryParameters {
  limit?: number;
  offset?: number;
}

export interface IMapStateToProps {
  todos: ITodos;
}
export interface IMapDispatchToProps {
  fetchTodos: ({}?: IQueryParameters) => void;
}
export interface IComponentProps {}

export type IProps = IMapStateToProps & IMapDispatchToProps & IComponentProps;