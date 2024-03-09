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
                  <div className="w-full h-full flex justify-center items-center bg-gray-800/30 backdrop-brightness-50"></div>

                  <div className="absolute m-auto  flex-1 mb-4 bg-opacity-20  rounded-xl max-w-52 ">
                      <div className=" relative mx-auto flex-1 w-32 h-32 md:w-60 md:h-60 "> <Image className="mx-auto backdrop-blur-sm opacity-60  shadow-lg" alt="logo" fill src="/images/logo1.png"/>      
</div>               
                    <h1 className="md:text-xl text-center flex-1 font-semibold text-sm text-white text-clampsize marker:shadow-lg shadow-slate-50 mb-3 italic">
                    <span className="font-serif"> {slides.title}</span> 
                    </h1>
                    <Link href="/registr" className=" flex-1 relative z-50 w-fit p-2 mb-1 text-base md:text-xl cursor-pointer flex 
                   font-serif whitespace-nowrap bg-green-500  rounded items-center opacity-85
                   mx-auto justify-center font-bold hover:bg-yellow-600  hover:text-gray-200 text-center shadow-slate-900 shadow-lg" > 
                    Register to get Involved
              
                </Link>
                  </div>
               
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-20 md:bottom-72 z-10 left-5 flex">
        {" "}
        <div onClick={prevSlide} className="arrowBtn">
          <IoArrowBack />
        </div></div>
        <div className="absolute bottom-20 md:bottom-72 z-10 right-0 lg:right-5 flex">
        <div onClick={nextSlide} className="arrowBtn">
          <IoArrowForward />
        </div>
      </div>
    </div>
  );
}
