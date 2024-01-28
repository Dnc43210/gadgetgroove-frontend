import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

export default function Search() {
  return (
    // <a>
    // <input
    //   class="border-2 border-gray-600 bg-gray-800 h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none text-gray-100"
    //   type="search"
    //   name="search"
    //   placeholder="Search"
    // />
    // </a>
    <Link to="/search">
      <div
        key="search-box"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
      >
        Search
      </div>
    </Link>
  );
}
