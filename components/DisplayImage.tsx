import React from "react";
import Image from "next/image";
import { imageData } from "@/lib/data";
import { thumbnailData } from "@/lib/data";
const DisplayImage = ({
  isOpen,
  setIsOpen,
  currentImg,
  setCurrentImg,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentImg: number;
  setCurrentImg: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="cursor-pointer">
      <Image
        onClick={() => setIsOpen(true)}
        src={imageData[currentImg]}
        width={1000}
        height={1000}
        alt="Product"
        className="w-[100%] object-contain lg:rounded-md"
      />
      <div className="hidden gap-3 flex-row w-full mt-5 justify-between lg:flex">
        {thumbnailData.map((data, index) => (
          <div
            onClick={() => {
              setCurrentImg(data.index);
              thumbnailData.forEach((item) => {
                if (item.index === data.index) {
                  item.isActive = true;
                } else {
                  item.isActive = false;
                }
              });
            }}
            key={index}
          >
            <Image
              src={data.imgUrl}
              alt="Image-thumbnail"
              height={80}
              width={80}
              className={`rounded-lg cursor-pointer hover:opacity-50 ${
                data.isActive ? "border-[2px] border-[#ff7d1a] opacity-50" : ""
              } transition-all duration-300 ease-in-out`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayImage;
