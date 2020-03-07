import React, {useEffect} from 'react';
import './Todos.scss';
import {IComponentProps, IMapDispatchToProps, IMapStateToProps, IProps} from "./types";
import Todo from "./todo/Todo";
import {IStore} from "Store";
import {connect} from "react-redux";
import {IQueryParameters} from "./types";
import {fetchTodos} from "App/todos/actions";

const mapStateToProps = (state: IStore): IMapStateToProps => {
  return {
    todos: state.todos.data
  }
};

const mapDispatchToProps = (dispatch: any): IMapDispatchToProps => {
  return {
    fetchTodos: (obj: IQueryParameters) => dispatch(fetchTodos(obj))
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