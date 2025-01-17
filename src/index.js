import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import "./index.css";
 
// ReactDOM.createRoot(
//   <Main/>, 
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <Main />
);