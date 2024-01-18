import React from "react";
import { Carousel } from "flowbite-react";

function Banner() {
  const srcList = [
    "https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?t=st=1705594102~exp=1705594702~hmac=44463c6f58263e251d8ccb46d807c3d5efce10ce6ae80f03b3fe4fe63b694237",
    "https://img.freepik.com/free-vector/black-friday-sale-banner-with-offer-details_1017-34730.jpg?w=826&t=st=1705596233~exp=1705596833~hmac=416661e071161f23e04569b1af10db5898417dfaa9b6a64365420cb592c7c117",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
  ];
  return (
    <div className=" h-56 sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel slideInterval={2000}>
        {srcList.map((src,i) => (
          <img src={src} alt={"banner"+i} className="h-full w-full object-cover"/>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
