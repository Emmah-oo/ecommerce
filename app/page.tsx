"use client";
import Image from "next/image";
import Header from "@/components/Header";
import { imageData } from "@/lib/data";
import { productData } from "@/lib/data";
import { useState } from "react";

export default function Home() {
  const [productCount, setProductCount] = useState(0);
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => {
    setCurrentImg((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const prevImg = () => {
    setCurrentImg((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };
  return (
    <main className="min-h-[100vh]">
      <Header />
      <div className="flex flex-col h-[90vh] lg:flex-row lg:items-center lg:justify-center lg:gap-10 lg:w-[75%] lg:m-auto">
        <div className="mt-5 relative w-3/5">
          <div className="w-full flex flex-col justify-between items-center">
            <Image
              src={imageData[currentImg]}
              width={1000}
              height={1000}
              alt="Product"
              className="w-[100%] object-contain lg:rounded-md"
            />

            <div className="hidden gap-3 flex-row w-full mt-5 justify-between lg:flex">
              <div>
                <Image
                  src="/assets/image-product-1-thumbnail.jpg"
                  alt="Image-thumbnail"
                  height={80}
                  width={80}
                  className="rounded-lg cursor-pointer active:border-[2px] border-[#ff7d1a] transition-all"
                />
              </div>
              <div>
                <Image
                  src="/assets/image-product-2-thumbnail.jpg"
                  alt="Image-thumbnail"
                  height={80}
                  width={80}
                  className="rounded-lg cursor-pointer active:border-[2px] border-[#ff7d1a] transition-all"
                />
              </div>
              <div>
                <Image
                  src="/assets/image-product-3-thumbnail.jpg"
                  alt="Image-thumbnail"
                  height={80}
                  width={80}
                  className="rounded-lg cursor-pointer active:border-[2px] border-[#ff7d1a] transition-all"
                />
              </div>
              <div>
                <Image
                  src="/assets/image-product-4-thumbnail.jpg"
                  alt="Image-thumbnail"
                  height={80}
                  width={80}
                  className="rounded-lg cursor-pointer active:border-[2px] border-[#ff7d1a] transition-all"
                />
              </div>
            </div>
          </div>

          <div className="absolute top-[50%] flex items-center justify-between w-full px-4 lg:hidden">
            <div
              className=" bg-white rounded-[100%] flex items-center justify-center cursor-pointer"
              onClick={prevImg}
            >
              <h1 className="text-2xl font-bold px-3 pb-1">{"<"}</h1>
            </div>
            <div
              className=" bg-white rounded-[100%] flex items-center justify-center cursor-pointer"
              onClick={nextImg}
            >
              <h1 className="px-3 pb-1 text-2xl font-bold">{">"}</h1>
            </div>
          </div>
        </div>
        <div>
          {productData.map((product) => (
            <div className="px-4">
              <h1 className="text-xl text-[#ff7d1a] my-3">{product.owner}</h1>
              <h1 className="mb-3 font-bold text-2xl">{product.title}</h1>
              <p className="mb-3">{product.description}</p>
              <div className="flex items-center justify-between">
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
          <div className="flex items-center justify-between mx-4 mt-5 p-3 bg-gray-50 rounded-lg">
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

          <div className="flex items-center justify-center gap-3 my-5 bg-[#ff7d1a] drop-shadow-2xl shadow-[#ff7d1a] mx-4 py-3 rounded-lg text-white">
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
    </main>
  );
}
