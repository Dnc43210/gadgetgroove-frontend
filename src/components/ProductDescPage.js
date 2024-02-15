import { Button, Carousel } from "flowbite-react";
import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../Layout";

function ProductDescPage() {
  // const product = props.product;
  const location = useLocation();
  const { state } = location;
  console.log(state);

  const srcList = [
    "https://img.freepik.com/free-vector/flat-design-sale-background_23-2149066483.jpg?w=740&t=st=1706434074~exp=1706434674~hmac=f5aea2f8a1f8c714c8cd5c93d987bfad650fb207cce2a2663b41d5e3e3df9bb1",
    "https://img.freepik.com/premium-vector/online-shopping-with-mobile-store-design-discount-promotion-banner_62391-413.jpg?w=740",
    "https://img.freepik.com/free-vector/flat-design-shopping-center-design-template_23-2149321347.jpg?w=996&t=st=1705641183~exp=1705641783~hmac=b04685daf43a42bed654c3f7131a5da72eef32f3e80b02e2619d807af46c4b4d",
  ];

  return (
    <Layout>
      <div className="h-screen grid grid-cols-3 space-x-4 rounded-none px-8 py-4 ">
        <div className="h-2/3">
        <Carousel className="rounded-xl " slideInterval={2000}>
          {state.images.map((src, i) => (
            <img
              src={src}
              alt={"img" + i}
              className="h-full w-full rounded-lg py-8"
            />
          ))}
        </Carousel>
        <div className="flex justify-start space-x-8">
            <Button className="bg-orange-500 w-[200px]">Add to cart</Button>
            <Button className="bg-orange-500 w-[200px]">Buy Now</Button>
        </div>
        </div>
        <div className=" w-full col-span-2 rounded-xl px-2 py-4">
          <div className="flex flex-col">
            <h1 className="text-gray-400 mr-3 uppercase text-xs">{state.brand}</h1>
            <h1 className="text-lg font-bold text-black truncate block capitalize">{state.title}</h1>
            <h1 className="text-lg font-semibold text-black cursor-auto ">M.R.P. <span className="text-3xl">{`$${state.price}`}</span></h1>
            <h1 className="pt-4 ">{state.description}</h1>
            <h1 className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eum molestiae quasi minima itaque qui ex? Repellat ullam, ad distinctio minima itaque delectus mollitia dolore consectetur aliquam, nobis adipisci veniam.</h1>
            <div className="font-semibold">Available Stocks: {state.stock}</div>
            <Button className="bg-orange-500 mt-4 w-[200px]" onClick={window.print}>Download Brochure</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default ProductDescPage;
