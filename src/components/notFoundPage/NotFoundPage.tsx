import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
  return <>
    <h1>This is surely not the page you were looking for!</h1>
    <Link to="/"><span>Back to home page</span><sup>Yup</sup></Link>
    <div className="container">Dummy</div>
  </>;
};

export default NotFoundPage;