import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listado from "./components/listado";

class App extends Component {

  constructor() {
    super();
    this.clickeame = this.clickeame.bind(this);
    this.otroClick = this.otroClick.bind(this);
  }

  clickeame() {
    console.log("me clickeaste")
  }

  otroClick() {
    console.log("otro click");
  }


  render() {

    const amigos = ["joe", "rodrigo", "isaac"];
    const enemigos = ["julina", "apocalipsis"]

    return (
      <div className="App">
        <div className="header">
          <div>
            <input type="text" placeholder="agregar amigo"/>
            <button>Agregar</button>
          </div>
          <div className="content">
            <ul>
              <li>
                <span>amigoa a </span>
                <button>add favorito</button>
                <button>remove fav</button>
              </li>
              <li>
                <span>amigoa b </span>
                <button>add favorito</button>
                <button>remove fav</button>
              </li>
              <li>
                <span>amigoa c </span>
                <button>add favorito</button>
                <button>remove fav</button>
              </li>
            </ul>
          </div>
          <div className="footer">
            <h1>mis favoritos</h1>
            amiga, abmioc, amigod
          </div>
        </div>
       
      </div>
    );
  }
}

export default App;
