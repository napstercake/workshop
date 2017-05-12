import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listado from "./components/listado";

class App extends Component {

  constructor() {
    super();
    this.clickeame = this.clickeame.bind(this)
  }

  clickeame() {
    console.log("me clickeaste")
  }


  render() {

    const amigos = ["joe", "rodrigo", "isaac"];
    const enemigos = ["julina", "apocalipsis"]

    return (
      <div className="App">
        <Listado 
                amigos={amigos} 
                enemigos={enemigos}
                test={this.clickeame}
        />
       
      </div>
    );
  }
}

export default App;
