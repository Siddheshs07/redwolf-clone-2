"use client";
import { pressItems } from "@/constants/press-items";
import Image from "next/image";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
const Press = () => {
  const slides = pressItems;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full m-0 my-5">
      <h1 className="text-2xl font-bold mb-1 text-center uppercase">PRESS</h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={false}
        className="mb-2"
      >
        {slides.map((e, i) => (
          <div key={i} className="flex flex-col justify-center items-center">
            <Image
              src={e.url}
              alt={e.title}
              width={130}
              height={100}
              key={e.title}
              className="m-5 "
            />
            {/* <p className="font-bold uppercase text-center">{e.title}</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Press;
