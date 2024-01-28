import React from "react";
import { Carousel } from "flowbite-react";

function Banner() {
  const srcList = [
    "https://img.freepik.com/free-vector/realism-landing-page-template-design_23-2150359479.jpg?w=740&t=st=1705641031~exp=1705641631~hmac=b6e4fb1cc9d71ebc28ac61892ea601fbda3c447776b52d89c3525b9d55a009ce",
    "https://img.freepik.com/premium-vector/online-shopping-with-mobile-store-design-discount-promotion-banner_62391-413.jpg?w=740",
    "https://img.freepik.com/free-vector/flat-design-shopping-center-design-template_23-2149321347.jpg?w=996&t=st=1705641183~exp=1705641783~hmac=b04685daf43a42bed654c3f7131a5da72eef32f3e80b02e2619d807af46c4b4d",
  ];
  return (
    <div className=" h-56 sm:h-64 xl:h-80 2xl:h-96 rounded-none">
      <Carousel className="rounded-none" slideInterval={2000}>
        {srcList.map((src,i) => (
          <img src={src} alt={"banner"+i} className="h-full w-full object-cover rounded-none"/>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
