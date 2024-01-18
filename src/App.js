import "./App.css";
// import Banner from "./components/Banner";
import Collections from "./components/Collections";
import NavigationBar from "./components/NavigationBar";

import React, { Component } from "react";
import Signin from "./components/Signin";

export default class App extends Component {
  constructor()
  {
    super();
    this.state = {
      isLogged : true
    }
  }

  render() {
    return (
      <>
      {this.state.isLogged ? 
      <div className="Home">
        <NavigationBar />
        <Collections />
      </div>
      :
      <>
        <Signin/>
      </>
      }
      </>
    );
  }
}
