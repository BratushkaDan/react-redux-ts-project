import React, {useEffect} from 'react';
import './Todos.scss';
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";

import Todo from "./todo/Todo";
import {IComponentProps, IMapDispatchToProps, IMapStateToProps, IProps} from "./types";
import {IStore} from "Store";
import {fetchTodos} from "App/todos/actions";

const mapStateToProps = (state: IStore): IMapStateToProps => {
  return {
    todos: state.todos.data
  }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, void, any>): IMapDispatchToProps => {
  return {
    fetchTodos: (obj) => dispatch(fetchTodos(obj))
  }
};

const Todos: React.FC<IProps> = ({fetchTodos, todos}) => {
  useEffect(() => {
    fetchTodos({limit: 20, offset: 5});
  }, []);

  const mapTodos = () => {
    return todos.map((todo, key) => <Todo key={key} {...todo}/>)
  };

  return <>
    <div className="container">
      {mapTodos()}
    </div>
  </>;
};

export default connect<IMapStateToProps, IMapDispatchToProps, IComponentProps, IStore>(mapStateToProps, mapDispatchToProps)(Todos);