import "./App.css";
import { Route, Routes } from "react-router-dom";
import Collections from "./components/Collections";
import NavigationBar from "./components/NavigationBar";
import React, { Component } from "react";
import { Footer } from "./components/Footer";
import Categories from "./components/Categories";
import SearchPage from "./components/SearchPage";
import ProductList from "./components/ProductList";

// const withMT = require("@material-tailwind/react/utils/withMT");

export default class App extends Component {
  render() {
    return (
      <>
        <div className="Home">
            <NavigationBar />
          <Routes>
            <Route path="/" element={<Collections />}></Route>
            <Route path="/home" element={<Collections />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
            <Route
              path="/category/:categoryName"
              element={<ProductList />}
            ></Route>
            <Route path="/search" element={<SearchPage />}></Route>
          </Routes>
            <Footer />
        </div>
      </>
    );
  }
}
