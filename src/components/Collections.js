import { useEffect, useState } from "react";
import Banner from "./Banner";

export default function Collections() {
  const [categories, setCategories] = useState([]);
  
  useEffect (()=> {
    fetch('https://dummyjson.com/products/categories')
  .then(response => response.json())
  .then(data => setCategories(data))
  .catch(error => console.error('error fetching categories',error));
  },[])

  // console.log(zcategories)

  return (
    <>
    {/* Banner as a Component */}
      <Banner />

    {/* Featured Category Collections */}
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-8 sm:py-2 lg:max-w-none lg:py-3">
            <h2 className="text-2xl font-bold text-gray-900">Featured Categories</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              
              {/* Featured Category Cards */}

              {categories.map((category,i) => (
                <div key={"name"+i} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src="https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="laptop"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="/">
                      <span className="absolute inset-0" />
                      {category}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
