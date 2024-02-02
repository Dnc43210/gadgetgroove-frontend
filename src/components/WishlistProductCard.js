import React from "react";
import { Link } from "react-router-dom";
// import ProductList from "./ProductList";

export default function WishlistProductCard(props) {
  const product = props.product;
   // eslint-disable-next-line 
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
    <Link className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a className="flex justify-between" href={product.href} key={"product" + 1}>
        <img
          src={product.images[0]}
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
              {"$" + product.price}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
        
          </div>
        </div>
      </a>
    </Link>
  );
}
