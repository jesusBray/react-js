import React, { Component } from 'react';

class Layout extends Component{

    constructor(){
        super();
        this.state={saludo:'buen dia!'/*,contador:4000*/};
    }

    // method(){
    //     while (contador == 0) {
    //         setTimeout(() =>{
    //             this.setState({indice:4});
    //             contador = contador - 1000;
    //             indice = indice - 1;
    //         },1000);
    //     }
    // }

    render(){
        setTimeout(()=>{
            this.setState({saludo:'adios'});  
        },4000);        
        return(
            <p>
                {this.state.saludo}
            </p>
        );
    }
}
export default Layout;