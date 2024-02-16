import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Layout from "../Layout";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const [products, setProducts] = useState([]);
  let handleQuery = () => {
    fetch("https://dummyjson.com/products/search?q=" + query)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.log("error", error));
  };

  const handleSearchClick = async () => {
    let q = document.getElementById("simple-search").value;
    setQuery(q);
    handleQuery();
  };

  return (
    <Layout>
      <div class="flex items-center px-10 py-10">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search the store..."
            onChange={handleSearchClick}
            required
          />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-10">
        {query!=="" && products.map((product, i) => (
          <ProductCard product={product} />
        ))}
      </div>
    </Layout>
  );
}
