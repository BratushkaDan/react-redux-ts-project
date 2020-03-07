import {Switch, Route} from "react-router";
import React from 'react';
import MainPage from "Components/mainPage/MainPage";
import Todos from "Components/todos/Todos";
import NotFoundPage from "Components/notFoundPage/NotFoundPage";

const Router: React.FC = () => {
  return <Switch>
    <Route path="/" exact component={MainPage}/>
    <Route path="/todos" component={Todos}/>
    <Route path="*" component={NotFoundPage}/>
  </Switch>;
};

export default Router;