"use client";

import { dataProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<dataProps[]>([]);

  useEffect(() => {}, []);

  const incrementCartItem = (id: number) => {};
  const decrementCartItem = (id: number) => {};
  const removeCartItem = (id: number) => {};
  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-4xl text-center font-bold uppercase">
            Cart Is Empty
          </h1>
          <button className="bg-red-500 m-4 p-2 rounded-lg text-white">
            <Link href="/">SHOP NOW</Link>
          </button>
        </div>
      ) : null}
      <div>
        {cartItems.map((item, index) => (
          <div>
            <div>
              <Image
                src={item.link}
                alt={item.brandName}
                width={50}
                height={50}
              />
              <h3>{item.brandName}</h3>
            </div>
            <div>
              <h2>RS: {item.quantity * item.finalPrice}</h2>
              <div className="flex items-center justify-between ">
                <button
                  onClick={() => {
                    decrementCartItem(item.id);
                  }}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => {
                    incrementCartItem(item.id);
                  }}
                >
                  +
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    removeCartItem(item.id);
                  }}
                >
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
