import {GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_ERROR} from "./actions";
import {IAction, IAppState} from "./types";

const todosReducer = (state: IAppState = {data: []}, action: IAction): IAppState => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {...state, loading: true};
    case GET_TODOS_ERROR:
      return {...state, error: true};
    case GET_TODOS_SUCCESS:
      return {...state, data: action.payload};
    default:
      return state;
  }
};

export default todosReducer;