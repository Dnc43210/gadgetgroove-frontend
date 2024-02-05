// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Collections from "./components/Collections";

import React, { Component } from "react";
import Signin from "./components/Signin";
import Categories from "./components/Categories";
import SearchPage from "./components/SearchPage";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CartPage from "./components/CartPage";
// import Wishlist from "./components/Wishlist";
import Dispatch from "./components/Dispatch";
import Wishlist2 from "./components/Wishlist2";

// const withMT = require("@material-tailwind/react/utils/withMT");

export default class App extends Component {
  render() {
    return (
      <>
        <div className="Home">
          <Routes>
            <Route path="/" element={<Collections />}></Route>
            <Route path="/home" element={<Collections />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
            <Route path="/wishlist" element={<Wishlist2 />}></Route>
            <Route path="/category/:categoryName" element={<ProductList />} ></Route>
            <Route path="/search" element={<SearchPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/dispatch" element={<Dispatch />}></Route>
            
          </Routes>
        </div>
      </>
    );
  }
}
