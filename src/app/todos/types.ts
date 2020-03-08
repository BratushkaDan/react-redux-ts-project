import {GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS} from "App/todos/actions";
import {ITodo} from "API/types";

export type ActionTypes = typeof GET_TODOS_ERROR | typeof GET_TODOS_REQUEST | typeof GET_TODOS_SUCCESS;

export interface IResponse {
  type: ActionTypes;
  payload: Array<ITodo>;
}

export type IAction = IResponse;

export interface IAppState {
  data: Array<ITodo>;
  loading?: boolean;
  error?: boolean;
}