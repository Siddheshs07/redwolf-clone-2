"use client";

import { AppDispatch, useAppSelector } from "@/redux/store";
import { dataProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateCart } from "@/redux/features/cart-slice";

const CartPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartArray: dataProps[] = useAppSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState<dataProps[]>([]);

  useEffect(() => {
    setCartItems(cartArray);
  }, [cartArray]);

  const incrementCartItem = (id: number) => {
    let newCartItem = cartArray.map((item, index) =>
      id === item.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch(updateCart(newCartItem));
  };
  const decrementCartItem = (id: number) => {
    let newCartItem = cartArray.map((item, index) =>
      id === item.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    dispatch(updateCart(newCartItem));
  };
  const removeCartItem = (id: number) => {
    let newCartItem = [...cartArray];
    newCartItem.splice(id, 1);
  };
  return (
    <div className="flex items-center justify-center my-8 w-full p-2 max-md:flex-col">
      {cartItems.length === 0 ? (
        <div className="flex items-center justify-between gap-4 flex-col">
          <h1 className="text-4xl text-center font-bold uppercase">
            Cart Is Empty
          </h1>
          <button className="bg-red-500 m-4 p-2 rounded-lg text-white">
            <Link href="/">SHOP NOW</Link>
          </button>
        </div>
      ) : (
        <div className=" w-full border-2 border-black rounded-xl p-2 m-0">
          <h1 className=" text-center text-4xl font-bold uppercase my-5 underline">
            Cart Items
          </h1>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap items-center justify-between border border-gray-500 rounded-xl m-2 p-2 mb-6 max-md:flex-col"
            >
              <div className="flex items-center justify-around">
                <Image
                  src={item.link}
                  alt={item.brandName}
                  width={250}
                  height={250}
                  className="w-40 h-40 rounded-xl"
                />
                <div className="flex flex-col m-4">
                  <h3 className="text-xl font-semibold">{item.brandName}</h3>
                  <p>
                    <span className="font-semibold">Product Description: </span>
                    <span>{item.description.slice(0, 55)}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-center items-center ">
                <p className="font-medium m-2">
                  {item.quantity * item.finalPrice} ₹
                </p>
                <div className="flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      decrementCartItem(item.id);
                    }}
                    className="cursor-pointer m-1 p-2 bg-red-500  border rounded-lg"
                  >
                    <p className="text-xl text-white">-</p>
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => {
                      incrementCartItem(item.id);
                    }}
                    className="cursor-pointer m-1 p-2 bg-red-500  border rounded-lg"
                  >
                    <p className="text-xl text-white">+</p>
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    className="bg-red-500 cursor-pointer m-1 p-2 border rounded-lg"
                    onClick={() => {
                      removeCartItem(item.id);
                    }}
                  >
                    <MdDeleteForever className="fill-white text-2xl " />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
