import "./styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";


import Layout from "Layouts/Layout";
import store from "./Store";

const app = document.getElementById("react-container");

class App extends React.Component {
  render() {
    return <Provider store={store}><BrowserRouter><Route path="/" component={Layout}/></BrowserRouter></Provider>
  }
}

ReactDOM.render(<App/>, app);
