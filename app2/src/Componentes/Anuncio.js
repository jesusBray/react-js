import React, { Component} from 'react';
class Anuncio extends Component{

    constructor(){
        super();
    }

    render(){
        return(
            <a>
               {this.props.holaMundo+"\t"}     
            </a>
        );
    }
}export default Anuncio;