import React from "react";
import { Link } from "react-router-dom"
import ProductDescPage from "./ProductDescPage";
// import ProductList from "./ProductList"; 

let handleAddToCart = (prod) => {
  console.log(prod);
};

export default function ProductCard(props) {
  const product = props.product;
  const handleAddToWishlist = () => {
    let productList = JSON.parse(localStorage.getItem("ProductList"));
    if(productList){
    productList.unshift(product)
    localStorage.setItem('ProductList', JSON.stringify(productList));
    }
    else{
      productList=[]
      productList.unshift(product)
      localStorage.setItem('ProductList', JSON.stringify(productList));
    }
  
  }
  return (
    <Link to={"/product"} state={props.product}  className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href={product.href} key={"product" + 1}>
        <img
          src={product.images[0]}
          alt={product.imageAlt}
          className="h-80 w-72 object-cover rounded-t-xl"
          
        />
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
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div
              className="flex items-center ml-auto bg-orange-500 px-3 2 rounded-lg text-gray-100 "
              onClick={handleAddToCart(product)}
            >
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
              &nbsp;&nbsp;Add to Cart
            </div>
            <div onClick={handleAddToWishlist} className="flex items-center justify-center ml-auto bg-orange-500 px-1 py-0 rounded-2xl text-gray-100 ">
              
              {/* &nbsp;&nbsp; */}
              ♡
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
