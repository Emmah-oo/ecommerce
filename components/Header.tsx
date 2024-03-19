"use client";
import { useState } from "react";
import Image from "next/image";
import { HiOutlineX } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="flex justify-between items-center relative px-4 h-16 w-full lg:py-12 lg:px-20">
      <div className="flex items-center gap-3">
        <div className="flex z-20 sm:hidden" onClick={handleNav}>
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
            <li className="mx-2 cursor-pointer">Collections</li>
            <li className="mx-2 cursor-pointer">Men</li>
            <li className="mx-2 cursor-pointer">Women</li>
            <li className="mx-2 cursor-pointer">About</li>
            <li className="mx-2 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Mobile Nav */}
        <ul
          className={`flex fixed w-3/4 flex-col left-0 top-0 items-start 
        pt-28 pl-5 h-full gap-4 bg-white z-10 sm:hidden transition-all ${
          nav ? "translate-x-0 drop-shadow-xl" : "-translate-x-full"
        }`}
        >
          <li className="mx-2 font-bold cursor-pointer">Collections</li>
          <li className="mx-2 font-bold cursor-pointer">Men</li>
          <li className="mx-2 font-bold cursor-pointer">Women</li>
          <li className="mx-2 font-bold cursor-pointer">About</li>
          <li className="mx-2 font-bold cursor-pointer">Contact</li>
        </ul>
      </div>

      <div className="flex items-center gap-5">
        <div>
          <Image
            src="/assets/icon-cart.svg"
            alt="cart"
            width={20}
            height={20}
          />
        </div>
        <div>
          <Image
            src="/assets/image-avatar.png"
            alt="avatar"
            height={40}
            width={40}
          />
        </div>
      </div>
      <div className="absolute h-[1px] w-9/12 bg-black bottom-[-1rem]"></div>
    </header>
  );
};

export default Header;
