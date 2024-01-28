import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import Collections from "./components/Collections";
import NavigationBar from "./components/NavigationBar";

import React, { Component } from "react";
import Signin from "./components/Signin";
import { Footer } from "./components/Footer";
import Categories from "./components/Categories";
import SearchPage from "./components/SearchPage";

// const withMT = require("@material-tailwind/react/utils/withMT");

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: true,
    };
  }

  render() {
    return (
      <>
        {this.state.isLogged ? (
          <div className="Home">
            <NavigationBar />
            <Routes>
              <Route path="/" element={<Collections />}></Route>
              <Route path="/home" element={<Collections />}></Route>
              <Route path="/categories" element={<Categories />}></Route>
              <Route path="/search" element={<SearchPage />}></Route>
            </Routes>
            <Footer />
          </div>
        ) : (
          <>
            <Signin />
          </>
        )}
      </>
    );
  }
}
