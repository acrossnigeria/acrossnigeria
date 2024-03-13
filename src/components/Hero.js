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
    <div className="h-64 w-screen lg:h-[700px] max-h-1100 relative top-0 left-0 columns-1 overflow-hidden">
      <div className="w-full bg-gradient-to-r from-gray-950 to-black bg-blend-luminosity bg-opacity-75 h-full flex justify-center items-center overflow-hidden relative">
        {sliderData.map((slides, index) => (
          <div
            className={`h-full w-full overflow-hidden absolute top-0 left-0  transition  duration-300 ease-in `}
            key={index}
          >
            {index === current && (
              <div className="absolute top-0 left-0 w-full h-full  overflow-hidden flex items-center justify-center">
              <Image
                    src={slides.image}
                    alt={slides.alt}
                   
                    className="absolute w-full h-full object-contain top-0 lg:top-10 left-0 overflow-hidden"
                    placeholder="blur"
                  />
                
                  <div className="absolute m-auto content-center place-content-center justify-self-center h-20
                  place-self-center flex-1 mb-4 bg-opacity-20  rounded-xl max-w-36 lg:max-w-52 ">
                      <div className=" relative mx-auto flex-1 w-14 h-16 md:w-40 md:h-40 ">
                         <Image className="mx-auto backdrop-blur-sm opacity-85  shadow-lg" alt="logo" fill src="/images/logo1.png"/>      
</div>               
                    <h1 className="md:text-xl text-[10px] text-center flex-1 font-semibold text-white text-clampsize marker:shadow-lg shadow-slate-50 mb-3 italic">
                    <span className="font-serif"> {slides.title}</span> 
                    </h1><p></p>
                    <div className="relative z-50 flex-1 justify-self-center place-items-center 
                    text-[8px] p-[2px] lg:text-base place-self-center mx-auto w-fit h-fit primary-button"> <Link href="/registr" > 
                    Register to get Involved
              
                </Link></div>
                  
                  </div>
               
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-24 lg:bottom-72 z-10 left-5 flex">
        {" "}
        <div onClick={prevSlide} className="arrowBtn">
          <IoArrowBack />
        </div></div>
        <div className="absolute bottom-24 lg:bottom-72 z-10 right-0 lg:right-5 flex">
        <div onClick={nextSlide} className="arrowBtn">
          <IoArrowForward />
        </div>
      </div>
    </div>
  );
}
