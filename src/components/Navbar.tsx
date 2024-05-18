"use client";

import Image from "next/image";
import { FaInfoCircle, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../../public/assets/images/rw-logo-gif-transparent-red.jpg";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { NavbarItems } from "@/constants/nav-items";
import { NavItems } from "../types/index";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const Navbar = () => {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div className="mx-auto flex w-full max-w-full justify-between text-sm border-b-2 shadow-sm bg-white">
      {/* mobile nav */}
      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl content-center xl:hidden"
      />
      {/* left section */}

      <section className="flex items-center gap-10">
        {/* logo */}
        <div className="m-1 flex justify-between items-center gap-2">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              priority={true}
              width={170}
              height={55}
              className="w-44 h-14 md:content-center "
            />
            {/* <h1 className="text-4xl text-red-500  font-extrabold bg-gray-400 p-2 hover:text-yellow-500">
              REDWOLF
            </h1> */}
          </Link>
          <Link href="/cart">
            <FaShoppingCart className=" md:hidden h-fit text-3xl fill-red-600  transition-all hover:fill-gray-400 m-2" />
          </Link>
          <div className=" md:hidden flex items-center w-fit sm:hidden">
            <form
              action="#"
              method="get"
              className=" border-2 border-gray-300 flex items-center justify-between gap-2 p-[2px] rounded-xl w-fit"
            >
              <button type="button">
                <FaSearch className=" fill-red-600 text-2xl p-1" />
              </button>
              <input
                type="text"
                name="search"
                placeholder="Search Products..."
              />
            </form>
          </div>
        </div>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        {/* nav items */}
        <div className="hidden  xl:flex items-center gap-16 transition-all">
          {NavbarItems.map((item, index) => (
            <div
              key={index}
              className=" relative group px-2 py-3 transition-all "
            >
              <Link href={""}>
                <p className="flex cursor-pointer items-center gap-2 text-neutral-600 group-hover:text-red-600">
                  <span className="text-[16px] font-semibold">
                    {item.label}
                  </span>
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                </p>
              </Link>

              {/* dropdown */}
              <div className="absolute border-2 left-0 top-11 hidden w-fit h-fit flex-row rounded-lg bg-white py-3 shadow-xl transition-all group-hover:flex group-hover:justify-items-center z-50">
                {item.children.map((child, index) => (
                  <div
                    className="py-1 px-[6px] text-neutral-400 hover:text-red-600 m-2"
                    key={index}
                  >
                    <div className="uppercase text-left text-red-600 cursor-default font-semibold">
                      {child.label}
                    </div>
                    <div className="flex flex-col ">
                      {child.children
                        .slice(0, 15)
                        .map((childItem, childItemIndex) => (
                          <Link
                            key={childItemIndex}
                            href={childItem.link}
                            className="cursor-pointer items-center py-1 px-3 text-neutral-400 hover:text-red-600"
                          >
                            <p className="uppercase text-left mt-1">
                              {childItem.label}
                            </p>
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* right section */}
      <section className="hidden md:flex items-center gap-8 m-2 ">
        {/* search bar section */}
        <div className="flex items-center">
          <form
            action="#"
            method="get"
            className=" border-2 border-gray-300 flex items-center justify-between gap-2 p-[2px] rounded-xl"
          >
            <button type="button" disabled>
              <FaSearch className=" fill-red-600 text-2xl p-1" />
            </button>
            <input
              type="text"
              name="search"
              placeholder="Search Products..."
              className="p-1"
            />
          </form>
        </div>
        <div className=" flex items-center justify-between gap-14 p-1 mx-auto">
          <Link href="/about">
            <FaInfoCircle className="h-fit text-3xl fill-red-600  transition-all hover:fill-gray-400" />
          </Link>
          <Link href="/track">
            <FaLocationDot className="h-fit text-3xl fill-red-600  transition-all hover:fill-gray-400" />
          </Link>
          <Link href="/user">
            <FaUser className="h-fit text-3xl fill-red-600  transition-all hover:fill-gray-400" />
          </Link>
          <Link href="/cart">
            <FaShoppingCart className="h-fit text-3xl fill-red-600  transition-all hover:fill-gray-400" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Navbar;

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-start bg-black/60 xl:hidden">
      <div className="h-full w-[65%]  bg-white px-4 py-4">
        {/* close button */}
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        </section>
        {/* login and track order section */}
        <div className="flex items-center justify-between m-2 border-2 border-white rounded-xl bg-red-500 p-2 ">
          <div className="w-1/3 ml-2 mr-2 p-2  border-2 border-white bg-red-700 rounded-lg">
            <Link
              href="/track"
              className="flex flex-wrap items-center justify-around"
            >
              <FaLocationDot className="h-fit text-3xl fill-white  transition-all hover:fill-gray-400 max-sm:text-sm" />
              <p className="uppercase text-lg font-medium text-white max-sm:text-sm">
                track
              </p>
            </Link>
          </div>
          <div className="w-1/3 ml-2 p-2  border-2 border-white bg-red-700 rounded-lg">
            <Link
              href="/user"
              className="flex flex-wrap items-center justify-around"
            >
              <FaUser className="h-fit text-3xl fill-white transition-all hover:fill-gray-400  max-sm:text-sm" />
              <p className="uppercase text-lg font-medium text-white max-sm:text-sm ">
                login
              </p>
            </Link>
          </div>
        </div>
        {/* mobile nav menu item */}
        <div className="flex flex-col items-baseline  gap-16 transition-all uppercase text-xl">
          {NavbarItems.map((item, index) => (
            <div key={index}>
              <SingleNavItem label={item.label}>{item.children}</SingleNavItem>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleNavItem(item: NavItems) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <div>
      <Link
        ref={animationParent}
        onClick={toggleItem}
        href={item.link ?? "#"}
        className="relative   px-2 py-3 transition-all "
      >
        <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
          <span>{item.label}</span>
          {item.children && (
            // rotate-180
            <IoIosArrowDown
              className={`text-xs transition-all  ${
                isItemOpen && " rotate-180"
              }`}
            />
          )}
        </p>
      </Link>
      {/* dropdown */}
      {isItemOpen && item.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
          {item.children.map((ch, i) => (
            <div key={i}>
              <div>
                <Link
                  href={ch.link ?? "#"}
                  className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
                >
                  {/* item */}
                  <span className="whitespace-nowrap text-lg uppercase pl-3 ">
                    {ch.label}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
