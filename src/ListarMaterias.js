

import React, { Component } from "react";

export default class ListarMaterias extends Component{
    constructor(props){
        super(props);
        this.limpiar = this.limpiar.bind(this);
        this.listarMaterias = this.listarMaterias.bind(this);

        this.state = {
            materias: [],  
        };
    };

    listarMaterias(){
        fetch("http://localhost:1234/Estudiantes")
            .then((resp) => resp.json())
            .then((json) => { 
                this.setState({
                materias: json.materias,
                resultado: json.result,
            }); 
    });
    }

    limpiar(){
        this.setState({
            materias: [],
        });
    }

    render(){
    return(
        <div>
            <button onClick={this.listarMaterias}>Listar Materias de un Estud</button>
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
                        <th>Materia</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.estudiantes.map((e, index) => (
                        <tr>
                            <td>{e.nombre}</td>
                            <td>{e.apellido}</td>
                            <td>{e.legajo}</td>
                            <td>{e.carrera}</td>
                        </tr>   
                    ))}
                </tbody>
            </table>
        </div>
        );
    }

};