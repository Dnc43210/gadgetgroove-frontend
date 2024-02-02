import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
import WishlistProductCard from "./WishlistProductCard";

function Wishlist() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let productList = JSON.parse(localStorage.getItem("ProductList"));
    setProducts(productList);
  },[]);
  return (
    <>
      <div class="w-full h-screen bg-white fixed top-0  shadow-2xl  transition-all duration-300 z-20 px-4 lg:px-[35px]">
        <div class="flex items-center justify-between border-b ">
          <div class="uppercase text-sm font-semibold">Shopping Bag (0)</div>
        </div>
        <div className="h-screen flex justify-center overflow-scroll ">
        <div className="w-3/4 ">
          <div className="mt-6 flex flex-col gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products &&
              products.map((product, i) => (
                <WishlistProductCard key={i} product={product} />
              ))}
          </div>
        </div>
        </div>
        <div class="flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] border-b"></div>
        <div class="flex flex-col gap-y-3  mt-4">
          <div class="flex w-full justify-between items-center">
            <div class="font-semibold">
              <span class="mr-2">Subtotal:</span> $ 0.00
            </div>
            <div class="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </div>
          </div>
          <a
            class="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"
            href="/"
          >
            View Cart
          </a>
          <a
            class="bg-primary flex p-3 justify-center items-center text-white w-full font-medium"
            href="/"
          >
            Checkout
          </a>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
