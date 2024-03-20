"use client";
import { useState } from "react";
import Image from "next/image";
import DisplayImage from "./DisplayImage";

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
          className="fixed inset-0 bg-black opacity-70 -z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default ImageModal;
