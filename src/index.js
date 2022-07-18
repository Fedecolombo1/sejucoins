import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
//incorporamos estilos via global
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
