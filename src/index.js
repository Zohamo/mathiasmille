import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./css/knacss.min.css";
import "./css/style.css";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-4171929-3');
ReactGA.pageview(window.location.pathname + window.location.search);
 
ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);