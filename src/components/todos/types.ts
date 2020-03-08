import {ITodo, ITodoQueryParams} from "API/types";

export interface IMapStateToProps {
  todos: Array<ITodo>;
  loading: boolean;
}

export interface IMapDispatchToProps {
  fetchTodos: ({}?: ITodoQueryParams) => void;
}


export interface IComponentProps {
}

export type IProps = IMapStateToProps & IMapDispatchToProps & IComponentProps;