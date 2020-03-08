import {IResponse, IAction} from "./types";
import {ThunkDispatch} from "redux-thunk";
import {IStore} from "Store";
import {ITodo, ITodoQueryParams} from "API/types";
import {todosAPI} from "API";

export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const processOnLoading = (): IResponse => {
  return {type: GET_TODOS_REQUEST, payload: []};
};

export const GET_TODOS_ERROR = "GET_TODOS_ERROR";
const processOnError = (): IResponse => {
  return {type: GET_TODOS_ERROR, payload: []};
};

export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const processOnSuccess = (payload: Array<ITodo>): IResponse => {
  return {type: GET_TODOS_SUCCESS, payload};
};

export const fetchTodos = (query: ITodoQueryParams = {}) => {
  return (dispatch: ThunkDispatch<IStore, void, IAction>, getState: () => IStore) => {
    dispatch(processOnLoading());
    todosAPI.getTodos()
      .then(payload => dispatch(processOnSuccess(payload)))
      .catch(() => dispatch(processOnError()));
  };
};