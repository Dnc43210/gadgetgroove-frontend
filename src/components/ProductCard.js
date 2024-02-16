import React from "react";
import { Link } from "react-router-dom";
import ProductDescPage from "./ProductDescPage";
// import ProductList from "./ProductList";

let handleAddToCart = (prod) => {
  console.log(prod);
};

export default function ProductCard(props) {
  const product = props.product;
  const handleAddToWishlist = () => {
    let productList = JSON.parse(localStorage.getItem("ProductList"));
    if (productList) {
      productList.unshift(product);
      localStorage.setItem("ProductList", JSON.stringify(productList));
    } else {
      productList = [];
      productList.unshift(product);
      localStorage.setItem("ProductList", JSON.stringify(productList));
    }
  };
  return (
    <div
      to={"/product"}
      state={props.product}
      className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
    >
      <a href={product.href} key={"product" + 1}>
      <Link      to={"/product"}
      state={props.product}>
        <img
          src={product.images[0]}
          alt={product.imageAlt}
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        </Link>
        <div className="px-2 2 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">
            {product.brand}
          </span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {product.title}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              {"$" + product.price}
            </p>
            <button
              className="flex items-center ml-auto mr-1 bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded-lg text-gray-100 "
              onClick={handleAddToCart(product)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              &nbsp;&nbsp;Add to Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded-lg text-gray-100 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}
