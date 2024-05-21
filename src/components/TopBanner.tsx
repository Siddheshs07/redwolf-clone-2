"use client";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { topBannerItems } from "@/constants/top-banner-items";
const TopBanner = () => {
  const slides = topBannerItems;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 12,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  return (
    <div className="m-3">
      <Carousel
        responsive={responsive}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={false}
      >
        {slides.map((e) => (
          <Link href="/">
            <Image
              src={e.url}
              alt={e.title}
              width={150}
              height={75}
              key={e.title}
            />
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default TopBanner;
