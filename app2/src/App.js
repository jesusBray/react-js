import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Anuncio from './Componentes/Anuncio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Anuncio holaMundo="hola mundo"/>
        <Anuncio holaMundo="hola que hace "/>
        <Anuncio holaMundo="hola mundo"/>
        <Anuncio holaMundo="hola mundo"/>
      </div>
    );
  }
}

export default App;