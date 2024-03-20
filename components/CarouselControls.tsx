import { imageData } from "@/lib/data";

const CarouselControls = ({
  currentImg,
  setCurrentImg,
  display,
}: {
  currentImg: number;
  setCurrentImg: React.Dispatch<React.SetStateAction<number>>;
  display?: boolean;
}) => {
  const nextImg = () => {
    setCurrentImg((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const prevImg = () => {
    setCurrentImg((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };
  console.log("Display prop:", display);
  return (
    <div
      className={`${
        display === true ? "lg:flex" : "lg:hidden"
      } absolute top-[45%] flex items-center justify-between w-full px-4`}
    >
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
  );
};

export default CarouselControls;
