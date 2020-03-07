import {GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS} from "App/todos/actions";

export type ActionTypes = typeof GET_TODOS_ERROR | typeof GET_TODOS_REQUEST | typeof GET_TODOS_SUCCESS;

export interface ITodo {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

export type ITodos = Array<ITodo>;

export interface IResponse {
  type: ActionTypes;
  payload: ITodos;
  loading?: boolean;
  error?: boolean;
}

export type IAction = IResponse;

export interface IAppState extends Pick<IResponse, 'loading' | 'error'> {
  data: ITodos
}

export interface IQueryParameters {
  limit?: number;
  offset?: number;
}
