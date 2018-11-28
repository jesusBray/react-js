import React, { Component } from 'react';

class Materias extends Component{
    constructor(){
        super();
        this.state = {
            materias: ['Lenguaje', 'Matematicas', 'Religion', 'Estudio Social', 'Fisica', 'Quimica'],
          };
    }

    render(){
        return(
            this.state.materias
        );
    }


}
export default Materias;