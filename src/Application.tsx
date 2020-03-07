import "./styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";


import Router from "./routes";
import Store from "./store";

const app = document.getElementById("react-container");

class App extends React.Component {
  render() {
    return <Provider store={Store}><BrowserRouter><Route path="/" component={Router}/></BrowserRouter></Provider>
  }
}

ReactDOM.render(<App/>, app);
