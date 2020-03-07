import {combineReducers} from "redux";
import todosReducer from "App/todos/reducer";

const reducers = combineReducers({
  todos: todosReducer
});

export type IStore = ReturnType<typeof reducers>;
export default reducers;