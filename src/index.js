import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Estudiante from "./Estudiante";
import reportWebVitals from "./reportWebVitals";
import ListarEstudiantes from "./ListarEstudiantes";
import Formulario from "./Formulario";

ReactDOM.render(
  <React.StrictMode>
    <Formulario/>
    <ListarEstudiantes/>
  </React.StrictMode>,
  document.getElementById("root")
);

//<Estudiante/>
//<ListarEstudiantes/>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
