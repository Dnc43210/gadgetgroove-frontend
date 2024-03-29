import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("error fetching categories", error));

    // console.log(categories);
  }, []);

  return (
    <Layout>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6" >
          <div className="mx-auto max-w-2xl py-8 sm:py-2 lg:max-w-none lg:py-3">
            <h2 className="text-2xl font-bold text-gray-900">All Categories</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {/* Category Cards */}

              {categories.map((category, i) => (
                <Link key={"name" + i} className="group relative py-3" to={"/category/"+category}>
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-80 sm:h-64">
                    <img
                      src="https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="laptop"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    
                      <span className="absolute inset-0" />
                      {category}
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {category.charAt(0).toUpperCase()+category.slice(1).toLowerCase()}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}