"use client";
import Image from "next/image";
import { useState } from "react";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    console.log("working");
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div className="cursor-pointer" onClick={handleClick}>
        <Image src="/assets/icon-cart.svg" alt="cart" width={30} height={30} />
      </div>
      {isOpen && (
        <div className="absolute -bottom-[55vh] h-[50vh] mt-[5rem] z-10 bg-white left-0 w-full md:w-[25%] md:h-[30vh] md:-bottom-[30vh] md:left-[72%] drop-shadow-lg">
          <div className="flex items-start justify-center flex-col h-full">
            <h2 className="text-lg p-3 font-semibold mb-2">Cart</h2>
            <span className="block h-[2px] w-full bg-gray-200"></span>
            <div className="flex items-center justify-center h-full w-full">
              <p>Your cart is empty</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
