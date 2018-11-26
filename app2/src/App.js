import React, { Component } from 'react';
import './App.css';
import Anuncio from './Componentes/Anuncio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Anuncio holaMundo="hola mundo"/>
        <br/>
        <Anuncio holaMundo="hola mundo"/>
        <br/>
        <Anuncio holaMundo="hola mundo"/>
      </div>
    );
  }
}

export default App;
