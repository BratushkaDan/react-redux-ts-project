import React, {useEffect} from 'react';
import './Todos.scss';

import Todo from "./todo/Todo";
import {IProps} from "./types";

const Todos: React.FC<IProps> = ({fetchTodos, todos, loading}) => {

  useEffect(() => {
    fetchTodos();
  }, []);

  const mapTodos = () => {
    return todos.map((todo, key) => <Todo key={key} {...todo}/>)
  };

  return <>
    <div className="container">
      {loading ? 'Загружаем' : mapTodos()}
    </div>
  </>;
};

export default Todos;