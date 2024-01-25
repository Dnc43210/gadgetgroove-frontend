import "./App.css";
// import Banner from "./components/Banner";

import Collections from "./components/Collections";
import NavigationBar from "./components/NavigationBar";

import React, { Component } from "react";
import Signin from "./components/Signin";
import { Footer } from "./components/Footer";
import ProductList from "./components/ProductList";

// const withMT = require("@material-tailwind/react/utils/withMT");

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
        {/* <Collections /> */}
        <ProductList />
        <Footer/>
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
