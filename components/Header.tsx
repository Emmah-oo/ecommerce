"use client";
import { useState } from "react";
import Image from "next/image";
import { HiOutlineX } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import Cart from "./Cart";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="flex justify-between items-center relative px-4 pt-4 h-16 w-full lg:py-12 lg:px-20">
      <div className="w-full flex items-center gap-3">
        <div className="flex z-30 sm:hidden" onClick={handleNav}>
          {nav ? (
            <HiOutlineX className="text-3xl cursor-pointer" />
          ) : (
            <AiOutlineMenu className="text-3xl cursor-pointer" />
          )}
        </div>
        <div className="flex gap-4 items-center">
          <Image
            src="/assets/logo.svg"
            alt="/"
            height={180}
            width={180}
            className="z-10 cursor-pointer"
          />
          <ul className="hidden sm:flex">
            <li className="mx-2 cursor-pointer text-gray-700 transition-colors duration-300 hover:text-black">
              Collections
            </li>
            <li className="mx-2 cursor-pointer text-gray-700 transition-colors duration-300 hover:text-black">
              Men
            </li>
            <li className="mx-2 cursor-pointer text-gray-700 transition-colors duration-300 hover:text-black">
              Women
            </li>
            <li className="mx-2 cursor-pointer text-gray-700 transition-colors duration-300 hover:text-black">
              About
            </li>
            <li className="mx-2 cursor-pointer text-gray-700 transition-colors duration-300 hover:text-black">
              Contact
            </li>
          </ul>
        </div>

        {/* Mobile Nav */}
        <ul
          className={`flex fixed w-[60%] flex-col left-0 top-0 items-start 
      pt-28 pl-5 h-full gap-4 bg-white z-20 sm:hidden transition-all duration-300 ${
        nav ? "translate-x-0 drop-shadow-xl" : "-translate-x-full"
      }`}
        >
          <li className="mx-2 font-bold cursor-pointer">Collections</li>
          <li className="mx-2 font-bold cursor-pointer">Men</li>
          <li className="mx-2 font-bold cursor-pointer">Women</li>
          <li className="mx-2 font-bold cursor-pointer">About</li>
          <li className="mx-2 font-bold cursor-pointer">Contact</li>
        </ul>
        {nav && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
            onClick={handleNav}
          ></div>
        )}
      </div>

      <div className="flex items-center gap-5">
        <Cart />
        <div className="cursor-pointer">
          <Image
            src="/assets/image-avatar.png"
            alt="avatar"
            height={40}
            width={40}
          />
        </div>
      </div>
      <div className="hidden md:block md:absolute md:h-[1px] md:w-[90%] md:bg-black md:bottom-[-1rem]"></div>
    </header>
  );
};

export default Header;
