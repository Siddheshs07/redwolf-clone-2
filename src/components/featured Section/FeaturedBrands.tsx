"use client";

import { featuredBrandItems } from "@/constants/featured-brand-items";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const FeaturedBrands = () => {
  const slides = featuredBrandItems;
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
    <div className="w-full  my-5">
      <h1 className="text-2xl font-bold mb-1  text-center uppercase">
        Featured Brands
      </h1>
      <Carousel
        responsive={responsive}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        arrows={false}
        className="mb-2"
      >
        {slides.map((e, i) => (
          <div key={i} className="flex flex-col justify-center items-center ">
            <Link href="/">
              <Image
                src={e.url}
                alt={e.title}
                width={140}
                height={115}
                key={e.title}
                className="m-5"
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedBrands;
