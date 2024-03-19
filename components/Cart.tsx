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
    <div className="relative">
      <div className="cursor-pointer" onClick={handleClick}>
        <Image src="/assets/icon-cart.svg" alt="cart" width={20} height={20} />
        {/* {isOpen && (
          <div className="origin-top-right mt-2 w-60 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg-white p-4">
            <h2 className="text-lg font-semibold mb-2">Cart</h2>
            Add your cart items and controls here */}
          {/* </div> */}
        {/* )} */}
      </div>
    </div>
  );
};

export default Cart;
