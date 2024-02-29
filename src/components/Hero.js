import React, { useState, useRef, useEffect } from "react";
import ImageOne from "../../public/images/img1.jpg";
import ImageTwo from "../../public/images/img2.jpg";
import ImageThree from "../../public/images/img3.jpg";
import ImageFour from "../../public/images/img4.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { debounce, throttle } from "lodash";
export const sliderData = [
  {
    title: "Game 1",
    price: "N 1,000",
    path: "#",
    label: "Game One",
    image: ImageOne,
    alt: "Game",
  },
  {
    title: "Game 2",
    price: "N 1,000",
    path: "#",
    label: "Game Two",
    image: ImageTwo,
    alt: "Game",
  },
  {
    title: "Game 3",
    price: "N 1,000",
    path: "#",
    label: "Game Three",
    image: ImageThree,
    alt: "Game ",
  },
  {
    title: "Game 4",
    price: "N 1,000",
    path: "#",
    label: "Game four",
    image: ImageFour,
    alt: "Game",
  },
];

/* ${
  index < current
    ? isNext
      ? "-translate-x-full"
      : "translate-x-full"
    : index > current
    ? isNext
      ? "translate-x-full"
      : "-translate-x-full"
    : ""
} 
for slide
*/
export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const length = sliderData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const slide = throttle(() => {
      if (isNext) {
        setCurrent(current === length - 1 ? 0 : current + 1);
        setIsNext(true);
      } else {
        setCurrent(current === 0 ? length - 1 : current - 1);
        setIsNext(false);
      }
    }, 100);
    timeout.current = setTimeout(slide, 5000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length, isNext]);
  const nextSlide = debounce(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setIsNext(true);
  }, 200);
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setIsNext(false);
  };
  return (
    <div className=" relative flex  bg-red-800 h-screen w-[98vw] max-h-1100 top-0 left-0 columns-1 overflow-hidden mb-4 items-center mx-0 content-center justify-center">
      <div className="w-screen bg-gradient-to-r from-yellow-500 to-green-600 h-full flex justify-center items-center overflow-hidden relative">
        {sliderData.map((slides, index) => (
          <div
            className={`h-screen w-screen overflow-hidden absolute top-0 transition-all duration-1000 ${
              index === current
                ? "transform scale-100 opacity-100"
                : "transform scale-150 opacity-50"
            }`}
            key={index}
          >
            {index === current && (
              <div className="absolute top-0 left-0 w-screen h-full overflow-hidden flex items-center justify-center">
                <Link href={slides.path} className=" cursor-pointer">
                  <Image
                    src={slides.image}
                    alt={slides.alt}
                    className="absolute w-screen h-screen object-cover top-0 lg:top-10 left-0 overflow-hidden"
                    placeholder="blur"
                  />

                  <div className="absolute p-5 bottom-28 mb-0 bg-gradient-to-r w-96 from-yellow-600  to-green-400 rounded-xl max-w-7xl ">
                    <h1 className="text-4xl text-clampsize shadow-slate-50 mb-3 text-left uppercase">
                      {slides.title}
                    </h1>
                    <div className=" w-40 cursor-pointer flex items-center content-between whitespace-nowrap primary-button">
                      {" "}
                      {slides.label}
                      <IoMdArrowRoundForward />
                    </div>
                    <p>{slides.price}</p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute w-36 p-0 text-white  font-extrabold text-4xl bottom-12 z-10 right-12 flex">
        {" "}
        <div
          onClick={prevSlide}
          className="p-0 rounded-full m-5 cursor-pointer bg-opacity-50 bg-yellow-600 backdrop-blur-[1px] backdrop-opacity-90 border-transparent hover:scale-150 hover:bg-opacity-100 border-4 hover:border-green-800 hover:rounded-sm"
        >
          <IoArrowBack />
        </div>
        {"     "}
        <div
          onClick={nextSlide}
          className="p-0 rounded-full m-5 cursor-pointer bg-opacity-50 bg-yellow-600 backdrop-blur-[1px] backdrop-opacity-90 border-transparent hover:scale-150  hover:bg-opacity-100 border-4 hover:border-green-800 hover:rounded-sm"
        >
          {" "}
          <IoArrowForward />
        </div>
      </div>
    </div>
  );
}
