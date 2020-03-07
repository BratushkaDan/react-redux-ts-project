import {IResponse, ITodos, IQueryParameters, IAction} from "./types";
import {ThunkDispatch} from "redux-thunk";
import {IStore} from "Store";


export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const processOnLoading = (): IResponse => {
  return {type: GET_TODOS_REQUEST, payload: []};
};

export const GET_TODOS_ERROR = "GET_TODOS_ERROR";
const processOnError = (): IResponse => {
  return {type: GET_TODOS_ERROR, payload: []};
};

export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const processOnSuccess = (payload: ITodos): IResponse => {
  return {type: GET_TODOS_SUCCESS, payload};
};

export const fetchTodos = (query: IQueryParameters = {}) => {
  return (dispatch: ThunkDispatch<IStore, void, IAction>, getState: () => IStore) => {
    dispatch(processOnLoading());
    let url: string = `https://jsonplaceholder.typicode.com/todos?`;
    if (query.limit) url += `_limit=${query.limit}`;
    if (query.offset) url += `&_start=${query.offset}`;
    return fetch(url)
      .then(response => response.json())
      .then((payload: ITodos) => dispatch(processOnSuccess(payload)))
      .catch(() => dispatch(processOnError()));
  };
};