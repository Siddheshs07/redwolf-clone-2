"use client";
import { featuredThemesItems } from "@/constants/featured-theme-items";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FeaturedTheme = () => {
  const slides = featuredThemesItems;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="w-full m-0 my-5">
      <h1 className="text-2xl font-bold mb-1 text-center uppercase">
        Featured Themes
      </h1>
      <Carousel
        responsive={responsive}
        showDots={false}
        autoPlay={false}
        arrows={false}
        className="mb-2"
      >
        {slides.map((e, i) => (
          <div key={i} className="flex flex-col justify-center items-center ">
            <Link href="/">
              <Image
                src={e.url}
                alt={e.title}
                width={300}
                height={300}
                key={e.title}
                className="rounded-full m-5"
              />
              <p className="font-bold uppercase text-center">{e.title}</p>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedTheme;
