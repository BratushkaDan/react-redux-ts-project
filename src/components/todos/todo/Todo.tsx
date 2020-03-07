import React from 'react';
import './Todo.scss';
import {IProps} from "./types";


const Todo: React.FC<IProps> = ({id, title, completed}) => {
  return <>
    <div className="todo">
      <h3>{title}</h3>
      { completed ? <div>Выполнено</div> : <div> Не выполнено</div>}
      <p>Номер задания: {id}</p>
    </div>
  </>;
};

export default Todo;