"use client";

import { dataProps } from "@/types";

const AddToCart = (item: dataProps) => {
  const addToCart = () => {};
  return (
    <div>
      <button
        className="bg-red-500 m-4 p-2 rounded-lg text-white"
        onClick={() => addToCart()}
      >
        Add To Cart
      </button>
    </div>
  );
};
export default AddToCart;
