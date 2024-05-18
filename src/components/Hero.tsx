import React from "react";
import TopBanner from "./TopBanner";
import MainBanner from "./MainBanner";
import Featured from "./Featured";
import Press from "./Press";
import SiteInfo from "./SiteInfo";

const Hero = () => {
  return (
    <div>
      <TopBanner />
      <MainBanner />
      <Featured />
      <Press />
      <SiteInfo />
    </div>
  );
};

export default Hero;
