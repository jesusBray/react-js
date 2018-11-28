import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Componentes/Map';
import Layout from './Componentes/Layout';
import materias from './Componentes/Materias'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      materias: ['Lenguaje', 'Matematicas', 'Religion', 'Estudio Social', 'Fisica', 'Quimica'],
    };
  }
  
  // render() {
  //   const { materias } = this.state;
  //   return (
  //     <ul>
  //         {materias.map(tarea => {
  //           return <li key={`tarea_${tarea}`}>{tarea}</li>
  //         })}
  //     </ul>
  //   );
  // }
}
const App = () => 
  <div>
    <Map mapid='myLeaflotMap'/>
  </div>;


export default App;
