import React, { useEffect, useState } from "react";
import Layout from "../Layout";
// import { decreaseQuantity, increaseQuantity } from "../utils/Cartupdate.js";
import { Link } from "react-router-dom";

const confirmedQuantity = (id, q) => {
  console.log("item with id " + id + " is confirmed with " + q + " quantity");
};
const removeItem = (id) => {
  console.log("item with id " + id + " is removed");
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState([]);

  const [itemCount, setItemCount] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/carts/1")
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data.products);
        setCart(data);
        if (localStorage.getItem("itemCount") == null) {
          let quantities = new Array(cartItems.length);
          cartItems.map((item, i) => {
            quantities[i]=0;
            return 0;
          });
          setItemCount(quantities);
          localStorage.setItem("itemCount", JSON.stringify(itemCount));
        } else {
          setItemCount(JSON.parse(localStorage.getItem("itemCount")));
        }
      })
      .catch((error) => console.error("error fetching Cart Items", error));
  }, []);

  const handleInputChange = (event, i) => {
    const newValue = event.target.value;
    const updatedQuantities = [...itemCount];
    updatedQuantities[i] = newValue;
    setItemCount(updatedQuantities);
    localStorage.setItem("itemCount", JSON.stringify(updatedQuantities));
  };

  return (
    <Layout>
      {console.log(localStorage.getItem("itemCount"))}
      {localStorage.getItem("token") && (
        <div class="bg-gray-100 pt-20 pb-20">
          <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3">
              {cartItems.map((item, i) => {
                return (
                  <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img
                      src={item.thumbnail}
                      alt={"product-image" + i}
                      class="w-full rounded-lg sm:w-40"
                    />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div class="mt-5 sm:mt-0 w-[30%]">
                        <h2 class="text-lg font-bold text-gray-900">
                          {item.title}
                        </h2>
                        <p class="mt-1 text-xs text-gray-700">
                          {"$" + item.price * item.quantity}
                        </p>
                      </div>
                      <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div class="flex items-center border-gray-100">
                          <button
                            class="cursor-pointer rounded border bg-gray-100 py-1 px-3.5 duration-100 hover:bg-red-500 hover:text-blue-50"
                            onClick={() => {
                              removeItem(item.id);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </button>
                          {/* <input
                        class="h-8 w-10 border bg-white text-center text-xs outline-none rounded mx-1"
                        type="number"
                        value={itemCount[i]}
                        onChange={(event) => handleInputChange(event,i)}
                        min="1"
                      /> */}
                          {/* <select class="h-8 w-[80px] border bg-white text-center text-xs outline-none rounded mx-1" onChange={(event) => handleInputChange(event,i)}>
                          <option value={10} defaultValue="true">
                            10
                          </option>
                          <option value={20}>20</option>
                          <option value={30}>30</option>
                          <option value={40}>40</option>
                          <option value={50}>50</option>
                          <option value={60}>60</option>
                          <option value={70}>70</option>
                          <option value={80}>80</option>
                          <option value={90}>90</option>
                          <option value={100}>100</option>
                        </select> */}
                          <input
                            class="h-8 w-[80px] border bg-white text-center text-xs outline-none rounded mx-1"
                            type="number"
                            value={itemCount[i]}
                            onChange={(event) => handleInputChange(event, i)}
                            min="1"
                          />
                          <button
                            class="cursor-pointer rounded border bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() => {
                              confirmedQuantity(item.id, itemCount[i]);
                            }}
                          >
                            Set Quantity
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <-- Sub total --> */}
            {localStorage.getItem("token") && (
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
                    <p class="mb-1 text-lg font-bold">
                      ${cart.total + 4.99} USD
                    </p>
                    <p class="text-sm text-gray-700">including VAT</p>
                  </div>
                </div>
                <button class="mt-6 w-full rounded-md border py-1.5 font-medium hover:bg-blue-50">
                  Confirm Quantity
                </button>
                <Link to="/dispatch">
                  <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                    Check out
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      {localStorage.getItem("token") == null && (
        <section class="bg-gray-100 dark:bg-gray-900 ">
          <div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
            <div class="flex flex-col items-center max-w-sm mx-auto text-center">
              <p class="p-3 text-sm font-medium text-red-500 rounded-full bg-red-50 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </p>
              <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                Its So Lonely Here :(
              </h1>
              <p class="mt-4 text-gray-500 dark:text-gray-400">
                You cant view item right now.<br></br> Sign Up or Log In view
                items in your cart
              </p>

              <div class="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                <button
                  class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
                  onClick={() => {
                    window.history.back();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 rtl:rotate-180"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                  </svg>

                  <span>Go back</span>
                </button>
                <Link to="/">
                  <button class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                    Take me home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}