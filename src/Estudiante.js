import React, { Component } from "react";
import  "./Estudiante.css";

let estudiante = {
    nroDeLegajo:24456,
    nombre:"Santi",
    apellido:"fernandez",
    carrera:"LicEnAgronomia",
    materias: [
      ],
};

export default class Estudiante extends Component {

    constructor(props){
        super();
        this.state = {
            estudiante: estudiante,
            nuevaMateria: {},
          };
    }

    handlerChange = (event) => {
        const { name, value } = event.target;
        const { nuevaMateria } = this.state;
        this.setState({ nuevaMateria: { ...nuevaMateria, [name]: value } });
      };
      handlerSumbit = () => {
        const { estudiante, nuevaMateria } = this.state;
        estudiante.materias.push(nuevaMateria);
        this.setState({ estudiante: estudiante });
      };

    render() {
        const { estudiante } = this.state;

        
        const renderMaterias =
        estudiante.materias &&
        estudiante.materias.map((materia, index) => {
          return (
            <tr key={index}>
              <td>{materia.Materia}</td>
              <td>{materia.Horario}</td>
            </tr>
          );
        });

        return (
            <div>
                <div>
                    <p className="estilo">{"Numero de Legajo: " + estudiante.nroDeLegajo}</p>
                    <p className="estilo">{"Nombre y Apellido : " + estudiante.nombre + ", " + estudiante.apellido}</p>
                    <p className="estilo">{"Carrera: " + estudiante.carrera}</p>
                </div>

        <div>
          <label>Materia</label>
          <br />
          <input name="Materia" onChange={this.handlerChange}></input>
          <br />
          <label>Horario</label>
          <br />
          <input name="Horario" onChange={this.handlerChange}></input>
          <button onClick={this.handlerSumbit}>Agregar</button>

        </div>

        <div>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
          ></link>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Materias</th>
                <th scope="col">Horario</th>
              </tr>
            </thead>
            <tbody>{renderMaterias}</tbody>
          </table>

        </div>

        </div>
        );
        
    }
}