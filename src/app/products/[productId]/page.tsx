"use client";

import AddToCart from "@/components/AddToCart";
import { getProducts } from "@/redux/features/product-slice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { dataProps } from "@/types";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const SingleProductPage = ({ params }: { params: { productId: string } }) => {
  const dispatch = useDispatch<AppDispatch>();
  const allProduct = useAppSelector((state) => state.products.data);
  const products = allProduct?.find(
    (event: dataProps) => event._id === params.productId
  );
  // console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <div className="container m-auto ">
        <div className="flex items-center my-8 mx-8 justify-normal border border-gray-400 rounded-xl max-md:flex-col ">
          <div className="w-auto">
            <Image
              src={products?.link}
              alt={products?.brandName}
              width={500}
              height={500}
              className="p-4 w-96 h-96 rounded-[2.5rem]"
            />
          </div>
          <div className="p-4 m-4 w-full">
            <h1 className=" font-bold text-2xl">
              Brand Name: {products?.brandName}
            </h1>
            <p className="text-gray-600 flex flex-col">
              <span className="font-semibold">Description:</span>
              <span>{products?.description}</span>
            </p>
            <p className="text-gray-600 ">
              <span className="font-semibold">MRP: </span>
              <span className="line-through ">{products?.strickPrice} ₹</span>
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Final Price: </span>
              <span>{products?.finalPrice} ₹</span>
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Discount: </span>
              <span>{products?.discount} %</span>
            </p>
            <p className=" cursor-pointer text-gray-600">
              <span className="font-semibold"> Size: </span>
              <span className="m-1 p-1  text-gray-900 uppercase text-md">
                {products?.productSize.split(",")}
              </span>
            </p>
            <AddToCart products={products} />
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProductPage;
