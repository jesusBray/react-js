import React, { Component} from 'react';
class Anuncio extends Component{

    constructor(){
        super();
        this.state={lista:['jesus','roberto','zuriel','abiel']};
    }

    list(lista){
        return(lista.forEach(e => {
        }));
    }

    render(){
        return(
            <a>
               {this.props.holaMundo+"\t"}
            </a>
        );
    }
}export default Anuncio;