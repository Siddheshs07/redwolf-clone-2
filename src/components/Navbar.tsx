"use client";
import Link from "next/link";
import logo from "../../public/assets/images/rw-logo-gif-transparent-red.jpg";
import Image from "next/image";
import { FaInfoCircle, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavbarItems } from "@/constants/nav-items";
import { IoIosArrowDown } from "react-icons/io";
import SearchBar from "./SearchBar";
import { FaLocationDot } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavItems } from "@/types";
const Navbar = () => {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);
  function openSideMenu() {
    setSideMenu(true);
  }
  function closeSideMenu() {
    setSideMenu(false);
  }
  return (
    <div className="flex justify-between items-center text-sm border-b shadow-sm">
      {/* for mobile and tablet responsiveness */}
      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl content-center md:hidden"
      />

      {/* left section */}
      <div className="flex items-center gap-4">
        <div className="m-1 flex justify-between items-center gap-[10px]">
          <Link href="/">
            {/* <Image
              src={logo}
              alt="logo"
              priority={true}
              width={170}
              height={55}
            /> */}
            <h1 className="text-4xl text-red-500  font-extrabold border border-gray-400 rounded-lg p-1 hover:text-yellow-500">
              REDWOLF
            </h1>
          </Link>
          <Link href="/cart">
            <FaShoppingCart className=" md:hidden h-fit text-3xl fill-red-600  transition-all hover:fill-gray-400 m-2" />
          </Link>
        </div>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-10 transition-all">
          {NavbarItems.map((item, index) => (
            <div
              key={index}
              className="relative group px-2 py-2 transition-all "
            >
              <Link href="">
                <p className="flex items-center text-neutral-600 group-hover:text-red-600">
                  <span className="text-sm font-semibold uppercase">
                    {item.label}
                  </span>
                  <span className="rotate-180 transition-all group-hover:rotate-0">
                    <IoIosArrowDown />
                  </span>
                </p>
              </Link>

              {/* dropdown menu */}
              <div className="fixed border left-0 top-12 hidden w-screen flex-row  rounded-lg bg-white py-3 shadow-lg transition-all group-hover:flex z-50 ">
                {item.children.map((child, childIndex) => (
                  <div
                    key={childIndex}
                    className="m-2 py-1 px-1 text-neutral-500 hover:text-red-600"
                  >
                    <p className="text-left uppercase text-red-500 font-semibold cursor-default">
                      {child.label}
                    </p>
                    <div className="flex flex-col">
                      {child.children
                        .slice(0, 12)
                        .map((children, childrenIndex) => (
                          <Link
                            key={childrenIndex}
                            href={children.link}
                            className="cursor-pointer py-1 px-2 text-neutral-500 hover:text-red-500"
                          >
                            <p className="m-1 text-left uppercase">
                              {children.label}
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
      </div>
      {/* search bar section */}
      <div className="max-md:hidden m-0 p-0 flex items-center">
        <SearchBar />
      </div>
      {/* right section */}
      <div className="hidden md:flex items-center justify-between gap-2">
        <div className="p-4">
          <Link href="/about">
            <FaInfoCircle className=" text-3xl fill-red-600  transition-all hover:fill-gray-400 " />
          </Link>
        </div>
        <div className="p-4">
          <Link href="/track">
            <FaLocationDot className=" text-3xl fill-red-600  transition-all hover:fill-gray-400" />
          </Link>
        </div>
        <div className="p-4">
          <Link href="/user">
            <FaUser className=" text-3xl fill-red-600  transition-all hover:fill-gray-400" />
          </Link>
        </div>
        <div className="p-4">
          <Link href="/cart">
            <FaShoppingCart className=" text-3xl fill-red-600  transition-all hover:fill-gray-400" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-start bg-black/60 xl:hidden z-50">
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
