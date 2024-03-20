"use client";
import Image from "next/image";
import { useState } from "react";
import { CartType } from "@/lib/definitions";

interface CartProps {
  cart: CartType[];
  deleteFromCart: (itemId: number) => void;
}

const Cart = ({ cart, deleteFromCart }: CartProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div className="cursor-pointer" onClick={handleClick}>
        <Image src="/assets/icon-cart.svg" alt="cart" width={30} height={30} />
      </div>
      {isOpen && (
        <div className=" absolute -bottom-[55vh] h-[50vh] mt-[5rem] z-10 bg-white left-0 w-full md:w-[50%] md:h-[30vh] md:-bottom-[30vh] md:left-[50%] drop-shadow-lg lg:w-[35%] lg:left-[60%] xl:w-[25%] xl:left-[70%]">
          <div className="flex items-start flex-col h-full">
            <h2 className="text-lg p-3 font-semibold mb-2">Cart</h2>
            <span className="block h-[2px] w-full bg-gray-200"></span>
            {cart.length === 0 ? (
              <div className="flex items-center justify-center h-full w-full">
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className="overflow-auto flex flex-col h-full w-[100%] px-5 items-center">
                {cart.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between w-full py-3"
                  >
                    <div>
                      <Image
                        src={item.productImg}
                        width={50}
                        height={50}
                        alt={item.title}
                      />
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <h1 className="text-gray-600">{item.title}</h1>
                      </div>
                      <div className="flex gap-1">
                        <h1 className="text-gray-600">${item.price}</h1>
                        <h2 className="text-gray-600">x</h2>
                        <h1 className="text-gray-600">{item.productCount}</h1>
                        <p className="font-bold">${item.productCount * item.price}</p>
                      </div>
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => deleteFromCart(item.id)}
                    >
                      <Image
                        src="/assets/icon-delete.svg"
                        alt="delete"
                        width={15}
                        height={15}
                      />
                    </div>
                  </div>
                ))}

                <button className="bg-[#ff7d1a] w-[100%] mt-4 py-3 px-4 text-white rounded-lg mb-2 cursor-pointer">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
