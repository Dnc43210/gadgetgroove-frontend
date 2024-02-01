import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Layout from "../Layout";
// import axios from "axios";

export default function ProductList() {
  const {categoryName} = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/"+categoryName)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("error fetching categories", error));
    // console.log(products)
  }, [categoryName]);

  return (
    <Layout>
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {categoryName.charAt(0).toUpperCase()+categoryName.slice(1).toLowerCase()}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products &&
            products.map((product, i) => (
              <ProductCard product={product}/>
            ))}
        </div>
      </div>
    </div>
    </Layout>
  );
}
