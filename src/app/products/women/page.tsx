"use client";

import { dataProps } from "@/types";
import { getProducts } from "@/redux/features/product-slice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Image from "next/image";
import Link from "next/link";

type Props = {};
const WomenClothing = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const allProduct = useAppSelector((state) => state.products.data);
  const products = allProduct?.filter(
    (event: dataProps) => event.gender === "F"
  );
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="flex flex-col ">
      <div>
        <h1 className="text-2xl font-bold mb-2 mt-5 text-center uppercase">
          Women Apparel
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {products?.map((product: dataProps) => {
          return (
            <div>
              <div
                key={product._id}
                className="flex flex-col justify-between items-center  rounded-xl"
              >
                <div className="flex justify-between">
                  <Link href={`/products/${product._id}`}>
                    <Image
                      src={product.link}
                      alt={product.brandName}
                      width={200}
                      height={200}
                      className="p-4 w-80 h-96 rounded-[2.5rem]"
                    />
                  </Link>
                </div>
                <div className=" text-justify">
                  <h1 className="font-bold">{product.brandName}</h1>
                  <p>
                    <span>RS:</span>
                    <span className=" line-through">{product.strickPrice}</span>
                  </p>
                  <p> RS. {product.finalPrice} </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default WomenClothing;
