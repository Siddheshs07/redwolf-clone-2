"use client";

import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import Link from "next/link";
import { mainBannerItems } from "@/constants/main-banner-items";

const MainBanner = () => {
  const slides = mainBannerItems;
  return (
    <div className=" m-2">
      <Carousel
        indicators={false}
        autoPlay={true}
        interval={3000}
        duration={1000}
        animation="slide"
        NextIcon={<GrCaretNext />}
        PrevIcon={<GrCaretPrevious />}
      >
        {slides.map((e, i) => (
          <Link key={i} href="/">
            <Image
              src={e.url}
              alt={e.title}
              width={1920}
              height={450}
              key={e.title}
            />
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default MainBanner;
