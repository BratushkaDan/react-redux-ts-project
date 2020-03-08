import {GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_ERROR} from "./actions";
import {IAction, IAppState} from "./types";

const todosReducer = (state: IAppState = {data: []}, action: IAction): IAppState => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {...state, loading: true, error: false};
    case GET_TODOS_ERROR:
      return {...state, loading: false, error: true};
    case GET_TODOS_SUCCESS:
      return {...state, loading: false, data: [...state.data, ...action.payload]};
    default:
      return state;
  }
};

export default todosReducer;