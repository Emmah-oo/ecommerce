"use client";
import Image from "next/image";
import Header from "@/components/Header";
import { productData } from "@/lib/data";
import { useState } from "react";

import ImageModal from "@/components/ImageModal";
import DisplayImage from "@/components/DisplayImage";
import CarouselControls from "@/components/CarouselControls";

export default function Home() {
  const [productCount, setProductCount] = useState(0);
  const [currentImg, setCurrentImg] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-[100vh]">
      {isOpen && <ImageModal isOpen={isOpen} setIsOpen={setIsOpen} currentImg={currentImg} setCurrentImg={setCurrentImg} />}
      <Header />
      <div className="flex flex-col h-[90vh] lg:flex-row lg:items-center lg:justify-center lg:gap-10 lg:w-[75%] lg:m-auto">
        <div className="mt-5 relative lg:w-3/5">
          <div className="w-full flex flex-col justify-between items-center">
            <DisplayImage isOpen={isOpen} setIsOpen={setIsOpen} currentImg={currentImg} setCurrentImg={setCurrentImg} />
          </div>

          <CarouselControls currentImg={currentImg} setCurrentImg={setCurrentImg} />
        </div>
        <div>
          {productData.map((product, idx) => (
            <div className="px-4" key={idx}>
              <h1 className="text-xl text-[#ff7d1a] my-3">{product.owner}</h1>
              <h1 className="mb-3 font-bold text-2xl">{product.title}</h1>
              <p className="mb-3">{product.description}</p>
              <div className="flex items-center justify-between lg:flex-col lg:items-start">
                <div className="flex items-center gap-3">
                  <h1 className="font-bold text-2xl">
                    {product.discountPrice}
                  </h1>
                  <div className="bg-[#ffdabd] py-1 px-2 text-[0.8rem] font-bold text-[#ff7d1a] rounded-md">
                    <h1>{product.discountPercent}</h1>
                  </div>
                </div>
                <div>
                  <h1 className="text-gray-600 line-through">
                    {product.initialPrice}
                  </h1>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-col lg:flex-row w-full">
            <div className="flex items-center justify-between mx-4 mt-5 p-3 bg-gray-50 rounded-lg lg:w-[40%]">
              <div
                className="text-2xl text-[#ff7d1a] cursor-pointer"
                onClick={() => {
                  if (productCount <= 0) return;
                  setProductCount(productCount - 1);
                }}
              >
                -
              </div>
              <div className="font-bold">{productCount}</div>
              <div
                className="text-2xl text-[#ff7d1a] cursor-pointer"
                onClick={() => setProductCount(productCount + 1)}
              >
                +
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 my-5 cursor-pointer bg-[#ff7d1a] drop-shadow-2xl shadow-[#ff7d1a] mx-4 py-3 rounded-lg text-white lg:w-[60%] lg:mb-0">
              <Image
                src="/assets/icon-cart.svg"
                alt="cart"
                width={20}
                height={20}
              />
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
