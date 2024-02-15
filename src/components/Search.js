import { Disclosure } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Search() {
  return (
  
    <Link to="/search">
      <Disclosure>
      <Disclosure.Button
        key="search-box"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
      >
        Search
      </Disclosure.Button>
      </Disclosure>
    </Link>
  );
}
