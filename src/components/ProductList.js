import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList() {
    const [products,setProducts] = useState([]);

    useEffect (()=> {
      fetch('https://dummyjson.com/products/category/smartphones')
    .then(response => response.json())
    .then(data => setProducts(data.products))
    .catch(error => console.error('error fetching categories',error));
    console.log(products)
    },[])
  
    // console.log(products)
    

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Smartphones
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products && products.map((product,i) => (
            <li className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href={product.href} key={"product"+1}>
                <img
                  src={product.images[product.images.length -1]}
                  alt={product.imageAlt}
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    {product.brand}
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                  {product.title}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {"$"+product.price}
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                      Add to Cart
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}