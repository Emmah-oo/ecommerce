"use client";
import { useState } from "react";
import Image from "next/image";
import DisplayImage from "./DisplayImage";
import CarouselControls from "./CarouselControls";

const ImageModal = ({
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
    <div className="hidden w-[30%] m-auto lg:absolute z-50 inset-0 lg:flex items-center justify-center lg:flex-col">
      <DisplayImage
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentImg={currentImg}
        setCurrentImg={setCurrentImg}
      />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-80 -z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <CarouselControls currentImg={currentImg} setCurrentImg={setCurrentImg} display={true} />
    </div>
  );
};

export default ImageModal;
