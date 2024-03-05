import React, { useState, useRef, useEffect } from "react";
import ImageOne from "../../public/images/landing/image1.jpg";
import ImageTwo from "../../public/images/landing/image2.jpg";
import ImageThree from "../../public/images/landing/image3.jpg";
import ImageFour from "../../public/images/landing/image4.jpg";
import ImageFive from "../../public/images/landing/image5.jpg";
import ImageSix from "../../public/images/landing/image6.jpg";
import ImageSeven from "../../public/images/landing/image7.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
export const sliderData = [
  {
    title: "An Adventure of a lifetime",
    image: ImageOne,
    alt: "Across Nigeria",
  },
  {
  title: "An Adventure of a lifetime",
image: ImageTwo,
    alt: "Across Nigeria",
     },
  {
   title: "An Adventure of a lifetime",
 alt: "Across Nigeria",
    image: ImageThree,
  
  },
  {
   title: "An Adventure of a lifetime",
 alt: "Across Nigeria",
    image: ImageFour,
  },
  {
   title: "An Adventure of a lifetime",
 alt: "Across Nigeria",
    image: ImageFive,
  },
  {
   title: "An Adventure of a lifetime",
 alt: "Across Nigeria",
    image: ImageSix,
  },
  {
   title: "An Adventure of a lifetime",
 alt: "Across Nigeria",
    image: ImageSeven,
  },
];

/* 
${
              index === current
                ? "transform scale-100 opacity-100"
                : "transform scale-150 opacity-50"
            }
            above does not support sliding
${
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
    const slide = () => {
      if (isNext) {
        setCurrent(current === length - 1 ? 0 : current + 1);
        setIsNext(true);
      } else {
        setCurrent(current === 0 ? length - 1 : current - 1);
        setIsNext(false);
      }
    };
    timeout.current = setTimeout(slide, 5000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, length]);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setIsNext(true);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setIsNext(false);
  };
  return (
    <div className="h-screen w-screen max-h-1100 relative top-0 left-0 columns-1 overflow-hidden">
      <div className="w-full bg-gradient-to-r from-green-950 to-yellow-500 h-full flex justify-center items-center overflow-hidden relative">
        {sliderData.map((slides, index) => (
          <div
            className={`h-screen w-screen overflow-hidden absolute top-0 left-0  transition  duration-300 ease-in `}
            key={index}
          >
            {index === current && (
              <div className="absolute top-0 left-0 w-screen h-full  overflow-hidden flex items-center justify-center">
               
                  <Image
                    src={slides.image}
                    alt={slides.alt}
                    sizes="100vh, 100vw"
                    className="absolute w-screen h-screen object-cover top-0 lg:top-10 left-0 overflow-hidden"
                    placeholder="blur"
                  />

                  <div className=" relative top-0 shadow-lg m-auto mb-4 bg-opacity-20 p-10 bg-white rounded-xl max-w-7xl grid-cols-1">
                        <Image className="mx-auto " alt="logo" width={300} height={300} src="/images/logo1.png"/>                   
                    <h1 className="text-2xl font-semibold text-clampsize shadow-slate-50 mb-3 text-left uppercase">
                      {slides.title}
                    </h1>
                    <Link href="/registr" className=" cursor-pointer"> <div className=" w-full mx-auto mb-4 cursor-pointer flex items-center content-between whitespace-nowrap primary-button">
                Register to get Involved
                    </div> </Link>
                  </div>
               
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-72 z-10 left-5 flex">
        {" "}
        <div onClick={prevSlide} className="arrowBtn">
          <IoArrowBack />
        </div></div>
        <div className="absolute bottom-72 z-10 right-5 flex">
        <div onClick={nextSlide} className="arrowBtn">
          <IoArrowForward />
        </div>
      </div>
    </div>
  );
}
