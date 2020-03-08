import {IStore} from "Store";
import {IComponentProps, IMapDispatchToProps, IMapStateToProps} from "Components/todos/types";
import {ThunkDispatch} from "redux-thunk";
import {fetchTodos} from "App/todos/actions";
import {connect} from "react-redux";
import Todos from "./Todos";

const mapStateToProps = (state: IStore, props: IComponentProps): IMapStateToProps => {
  return {
    todos: state.todos.data,
    loading: state.todos.loading
  }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, void, any>, props: IComponentProps): IMapDispatchToProps => {
  return {
    fetchTodos: (obj) => dispatch(fetchTodos(obj))
  }
};

export default connect<IMapStateToProps, IMapDispatchToProps, IComponentProps/*, IStore*/>(mapStateToProps, mapDispatchToProps)(Todos);