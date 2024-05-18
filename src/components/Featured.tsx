import React from "react";
import FeaturedThemes from "./featured Section/FeaturedThemes";
import FeaturedCategories from "./featured Section/FeaturedCategories";
import FeaturedBrands from "./featured Section/FeaturedBrands";
import FeaturedProducts from "./featured Section/FeaturedProducts";

const Featured = () => {
  return (
    <div>
      <FeaturedThemes />
      <FeaturedCategories />
      <FeaturedBrands />
      <FeaturedProducts />
    </div>
  );
};

export default Featured;
