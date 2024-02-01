import React from "react";
import { Carousel } from "flowbite-react";

function Banner() {
  const srcList = [
    "https://img.freepik.com/free-vector/flat-design-sale-background_23-2149066483.jpg?w=740&t=st=1706434074~exp=1706434674~hmac=f5aea2f8a1f8c714c8cd5c93d987bfad650fb207cce2a2663b41d5e3e3df9bb1",
    "https://img.freepik.com/premium-vector/online-shopping-with-mobile-store-design-discount-promotion-banner_62391-413.jpg?w=740",
    "https://img.freepik.com/free-vector/flat-design-shopping-center-design-template_23-2149321347.jpg?w=996&t=st=1705641183~exp=1705641783~hmac=b04685daf43a42bed654c3f7131a5da72eef32f3e80b02e2619d807af46c4b4d",
  ];
  return (
    <div className=" h-56 sm:h-64 xl:h-80 2xl:h-96 rounded-none px-4 py-2 bg-gray-100">
      <Carousel className="rounded-none" slideInterval={2000}>
        {srcList.map((src,i) => (
          <img src={src} alt={"banner"+i} className="h-full w-full object-cover rounded-none"/>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
