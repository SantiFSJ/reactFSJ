
import React, { Component } from "react";

export default class ListarEstudiantes extends Component{
    constructor(props){
        super(props);
        this.limpiar = this.limpiar.bind(this);
        this.listarEstudiantes = this.listarEstudiantes.bind(this);
        this.listarEstudiantePorLegajo = this.listarEstudiantePorLegajo.bind(this);

        //this.nroLegajo = 22123;

        this.state = {
            nroLegajo : 0,
            estudiantes: [],  
        };
    };

    listarEstudiantePorLegajo(){
        this.limpiar();
        const { nroLegajo } = this.state;
        fetch("http://localhost:1234/EstudianteLegajo?legajo=" + nroLegajo)
        .then((resp) => resp.json())
        .then((json) => { 
            this.setState({
            estudiantes: json.estudiantes,
            resultado: json.result,
        }); 
    });
    }

    listarEstudiantes(){
        this.limpiar();
        fetch("http://localhost:1234/Estudiantes")
            .then((resp) => resp.json())
            .then((json) => { 
                this.setState({
                estudiantes: json.estudiantes,
                resultado: json.result,
            }); 
    });
    }

    limpiar(){
        this.setState({
            estudiantes: [],
        });
    }

    handlerChange = (event) => {
        const { value } = event.target;
        let { nroLegajo } = this.state;
        nroLegajo = value;
        this.setState({ nroLegajo: nroLegajo });
      };

    render(){
    return(
        <div>
            <label>Ingresar Legajo</label>
         
          <input name="nroLegajo" onChange={this.handlerChange}></input>
          <button onClick={this.listarEstudiantePorLegajo}>Listar Estudiante por Legajo</button>
            <button onClick={this.listarEstudiantes}>Listar Todos los Estudiantes</button>
            <button onClick={this.limpiar}>Limpiar</button>
            <hr />

            <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
          ></link>

            <table class="table table-striped">
                
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Legajo</th>
                        <th>Carrera</th>
                        <th>Materias</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.estudiantes.map((e, index) => (

                        <tr>
                            <td>{e.nombre}</td>
                            <td>{e.apellido}</td>
                            <td>{e.legajo}</td>
                            <td>{e.carrera}</td>
                            <td>{e.materias && e.materias.map((mat) => {
                                return mat.nombre + ",";
                            })}</td>
                        </tr>   
                    ))}
                    
                </tbody>

            </table>
        </div>
        );
    }

};