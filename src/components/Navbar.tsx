"use client";
import Link from "next/link";
import logo from "../../public/assets/images/rw-logo-gif-transparent-red.jpg";
import Image from "next/image";
import { FaInfoCircle, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavbarItems } from "@/constants/nav-items";
import { IoIosArrowDown } from "react-icons/io";
import SearchBar from "./SearchBar";
import { FaLocationDot } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { dataProps, NavItems } from "@/types";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { BiMinus, BiPlus } from "react-icons/bi";
const Navbar = () => {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const cartArray: dataProps[] = useAppSelector((state) => state.cart);
  const [cartItem, setCartItem] = useState(0);

  function openSideMenu() {
    setSideMenu(true);
  }
  function closeSideMenu() {
    setSideMenu(false);
  }

  useEffect(() => {
    setCartItem(cartArray.length);
  }, [cartArray]);

  return (
    <div className="flex justify-between items-center text-sm border-b shadow-sm">
      {/* for mobile and tablet responsiveness */}
      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl content-center lg:hidden"
      />

      {/* left section */}
      <div className="flex items-center gap-4">
        <div className="m-1 flex justify-between items-center gap-10">
          <Link href="/">
            {/* <Image
              src={logo}
              alt="logo"
              priority={true}
              width={170}
              height={55}
            /> */}
            <h1 className="text-4xl lg:text-center text-red-500  font-extrabold border border-gray-400 rounded-lg p-1 hover:text-yellow-500">
              REDWOLF
            </h1>
          </Link>
          <div className="md:hidden ">
            <Link href="/cart">
              <FaShoppingCart className=" relative text-3xl fill-red-600  transition-all hover:fill-gray-400" />
            </Link>
            <span className=" absolute top-0 bg-red-400 border rounded-full text-white text-xl ">
              {cartItem}
            </span>
          </div>
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
      <div className="lg:hidden m-0 p-0 flex items-center">
        <SearchBar />
      </div>
      {/* right section */}
      <div className="hidden lg:flex items-center justify-between gap-2">
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
            <FaShoppingCart className="relative text-3xl fill-red-600  transition-all hover:fill-gray-400" />
          </Link>
          <span className="absolute top-0  bg-red-400 border rounded-full text-white text-xl p-[1.5px]">
            {cartItem}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="absolute left-0 top-0 flex h-full min-h-screen w-full justify-start bg-black/60 xl:hidden z-50">
      <div className="h-full w-[80%] bg-white px-4 py-4">
        {/* close button */}
        <section className="flex justify-end mb-3">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        {/* login and track order section */}

        <div className="flex items-center w-full h-14 justify-start  bg-red-600 p-1">
          <div className="flex items-center justify-center w-full h-6 border  bg-[#a40f22] ml-3 my-[10px]">
            <Link href="/user">
              <div className="flex items-center justify-center gap-4">
                <p className="  transition-all hover:fill-gray-400  md:text-sm">
                  <FaLocationDot className="fill-white" />
                </p>
                <p className="uppercase font-medium text-white md:text-sm ">
                  track
                </p>
              </div>
            </Link>
          </div>

          <div className="flex items-center justify-center w-full h-6 border  bg-[#a40f22]  ml-2 mr-3 my-[10px]">
            <Link href="/user">
              <div className="flex items-center justify-center gap-4">
                <p className="  transition-all hover:fill-gray-400  md:text-sm">
                  <FaUser className="fill-white" />
                </p>
                <p className="uppercase font-medium text-white md:text-sm ">
                  login
                </p>
              </div>
            </Link>
          </div>
        </div>

        <h1 className="text-center mt-3 text-lg uppercase text-red-600 border-b ">
          Shop By category
        </h1>

        {/* mobile nav menu item */}
        <div className="flex flex-col items-start justify-center gap-2 transition-all capitalize text-base mt-3">
          {NavbarItems.slice(1).map((item, index) => (
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
        className="relative transition-all "
      >
        <div className="flex items-center justify-between cursor-pointer text-zinc-900 border-b">
          <div>{item.label}</div>
          <div>{item.children && isItemOpen ? <BiMinus /> : <BiPlus />}</div>
        </div>
      </Link>
      {/* dropdown */}
      {isItemOpen && item.children ? (
        <div className="w-full h-fit  flex-col gap-0  bg-white py-2 transition-all flex">
          {item.children.map((ch, i) => (
            <div key={i}>
              {ch.children?.slice(0, 4).map((chItem, indx) => (
                <div key={indx}>
                  <div>
                    <Link
                      href={chItem.link ?? "#"}
                      className=" flex cursor-pointer items-center  text-zinc-500 hover:text-black border-b"
                    >
                      <span className="text-base capitalize pl-3 ">
                        {chItem.label}
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
