import React, { Component } from "react";

export default class Formulario extends Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            form:{
                nombre: "",
                apellido: "",
                legajo: "",
                direccion: "",
                telefono: "",
                carrera: "",
                edad: "",
                materia: "",
            },
            resultado: "",
        };
        
    };


    handleChange(e){
        let nombre = e.target.name;
        let valor = e.target.value;

        this.setState((state) => ({
            form: {
                ...this.state.form,
                [nombre]: valor,
            }
        }));
    }

    handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:1234/estudiantes", {
            method: "POST",
            body : JSON.stringify({
                nombre: this.state.form.nombre,
                apellido: this.state.form.apellido,
                nroLegajo: this.state.form.legajo,
                carrera: this.state.form.carrera,
                materias:[this.state.form.materia],
                edad: this.state.form.edad,
            })
        })
        .then((resp) => resp.json())
        .then((json) => {
            if(json.result == "error"){
                this.setState({
                    resultado: json.message, 
                })
                return;
            }
            this.setState({
                resultado: "El Estudiante fue Creado con Exito!!",
            })
        })
    }

    render(){
        return(
            <div>
                <form>
                    <label>
                        Nombre:
                        <input
                        type="text"
                        name="nombre"
                        onChange={this.handleChange}
                        value={this.state.form.nombre}
                        />
                    </label>
                    <label>
                        Apellido:
                        <input
                        type="text"
                        name="apellido"
                        onChange={this.handleChange}
                        value={this.state.form.apellido}
                        />
                    </label>
                    <label>
                        Numero de Legajo:
                        <input
                        type="text"
                        name="legajo"
                        onChange={this.handleChange}
                        value={this.state.form.legajo}
                        />
                    </label>
                    <label>
                        Carrera:
                        <input
                        type="text"
                        name="carrera"
                        onChange={this.handleChange}
                        value={this.state.form.carrera}
                        />
                    </label>
                    <label>
                        Materias:
                        <input
                        type="text"
                        name="materia"
                        onChange={this.handleChange}
                        value={this.state.form.materia}
                        />
                    </label>
                    <label>
                        Edad:
                        <input
                        type="text"
                        name="edad"
                        onChange={this.handleChange}
                        value={this.state.form.edad}
                        />
                    </label>
                    <label>
                        <button onClick={this.handleSubmit} type="submit">
                        Enviar    
                        </button>
                    </label>
                </form>
                <p>{this.state.resultado}</p>
            </div>
        )
    };
}