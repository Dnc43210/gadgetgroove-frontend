import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
import WishlistProductCard from "./WishlistProductCard";
import Layout from "../Layout";

function Wishlist() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let productList = JSON.parse(localStorage.getItem("ProductList"));
    setProducts(productList);
  }, []);
  return (
    <Layout>
      <div class="w-full bg-white  transition-all duration-300 x-4 lg:px-[35px]">
        <div class="flex items-center justify-between border-b ">
          <div class="uppercase text-2xl font-semibold">Wishlist</div>
        </div>
        <div className="flex justify-center">
          <div className="w-3/4 ">
            <div className="mt-6 flex flex-col gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products &&
                products.map((product, i) => (
                  <WishlistProductCard key={i} product={product} />
                ))}
            </div>
          </div>
        </div>
        
      </div>
    </Layout>
  );
}

export default Wishlist;
