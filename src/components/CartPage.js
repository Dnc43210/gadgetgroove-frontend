import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../utils/Cartupdate.js";
import { Link } from "react-router-dom";
import Graph from "./Graph.js";
// let cart = {
//   id: 1,
//   products: [
//     {
//       id: 59,
//       title: "Spring and summershoes",
//       price: 20,
//       quantity: 3,
//       thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg",
//     },
//     {
//       id: 88,
//       title: "TC Reusable Silicone Magic Washing Gloves",
//       price: 29,
//       quantity: 2,
//       thumbnail: "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg",
//     },
//     {
//       id: 18,
//       title: "Oil Free Moisturizer 100ml",
//       price: 40,
//       quantity: 2,
//       thumbnail: "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
//     },
//     {
//       id: 95,
//       title: "Wholesale cargo lashing Belt",
//       price: 930,
//       quantity: 1,
//       thumbnail: "https://cdn.dummyjson.com/product-images/95/thumbnail.jpg",
//     },
//     {
//       id: 39,
//       title: "Women Sweaters Wool",
//       price: 600,
//       quantity: 2,
//       thumbnail: "https://cdn.dummyjson.com/product-images/39/thumbnail.jpg",
//     },
//   ],
//   total: 2328,
//   userId: 97,
//   totalProducts: 5,
//   totalQuantity: 10,
// };

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/carts/1")
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data.products);
        setCart(data);
      })
      .catch((error) => console.error("error fetching Cart Items", error));
  }, []);

  return (
    <Layout>
      <div class="bg-gray-100 pt-20 pb-20">
        <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div class="rounded-lg md:w-2/3">
            {cartItems.map((item, i) => (
              <div className="flex space-x-2">
                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img
                  src={item.thumbnail}
                  alt={"product-image" + i}
                  class="w-full rounded-lg sm:w-40"
                />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">
                      {item.title}
                    </h2>
                    <p class="mt-1 text-xs text-gray-700">
                      {"$" + item.price * item.quantity}
                    </p>
                  </div>
                  <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                      <div
                        class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={decreaseQuantity(item.id, 1)}
                      >
                        {" "}
                        -{" "}
                      </div>
                      <input
                        class="h-8 w-10 border bg-white text-center text-xs outline-none"
                        type="text"
                        value={item.quantity}
                        min="1"
                      />
                      <span
                        class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={increaseQuantity(item.id, 1)}
                      >
                        {" "}
                        +{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="a">
              <Graph/>
              </div>
              </div>
            ))}
          </div>

          {/* <-- Sub total --> */}
          <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Total Items</p>
              <p class="text-gray-700">{cart.totalProducts}</p>
            </div>
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Total Quantity</p>
              <p class="text-gray-700">{cart.totalQuantity}</p>
            </div>
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
              <p class="text-gray-700">${cart.total}</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Shipping</p>
              <p class="text-gray-700">$4.99</p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">${cart.total + 4.99} USD</p>
                <p class="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <Link to="/dispatch">
              <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
