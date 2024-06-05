import { footerMenuItems } from "@/constants/footer-menu-items";
import Link from "next/link";
import React from "react";
import { FaShippingFast, FaRupeeSign } from "react-icons/fa";
import { TbReplace } from "react-icons/tb";

const Footer = () => {
  const footerLinks = footerMenuItems;
  return (
    <footer className=" flex flex-col items-center bg-zinc-900 text-white mt-5 ">
      <div>newsletter</div>
      <div className=" flex max-md:flex-col  flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((e) => (
            <div
              key={e.title}
              className="flex flex-col gap-1 text-base min-w-[170px]"
            >
              <h3 className=" font-bold text-zinc-300">{e.title}</h3>
              {e.link.map((item) => {
                return (
                  <Link
                    key={item.title}
                    href={item.url || "/"}
                    className=" text-zinc-400"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-10 sm:px-16 px-6 py-10 text-base">
        <p className="text-center text-zinc-300 font-semibold text-base">
          Our site uses secure payment gateways. All major credit & debit cards
          accepted.
        </p>
        <div className="flex flex-row justify-center items-center gap-4  mt-10  sm:px-16 px-6 py-10 max-md:flex-col text-[14px] text-zinc-500">
          <div className=" flex items-center justify-center  px-4">
            <FaShippingFast className=" text-4xl mx-3" />
            <p>FREE SHIPPING ON </p>
            <p>ALL PREPAID ORDERS OVER Rs.</p>
            <p>499</p>
          </div>
          <div className=" flex items-center justify-start px-4">
            <FaRupeeSign className=" text-4xl mx-3" />
            <p className="line-clamp-2">CASH ON DELIVERY AVAILABLE</p>
            <p>TO MOST PARTS OF INDIA</p>
          </div>
          <div className=" flex items-center justify-start px-4">
            <TbReplace className="text-4xl mx-3" />
            <p>EASY 15 DAY RETURN</p>
            <p> POLICY</p>
          </div>
        </div>
      </div>
      <div className="text-center text-zinc-200 bg-zinc-800 w-full p-4 text-sm">
        <p>© 2024 Redwolf, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
