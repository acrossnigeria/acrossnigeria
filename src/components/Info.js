
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImFacebook2, ImInstagram } from "react-icons/im";

const Info = ()=>{
  const data={
  paragraph: ` We offer a variety of giveaways, game show and reality shows that
            cater to different tastes and interests. Whether you want to win
            amazing prizes, test your skills and knowledge about Nigeria, or
            watch captivating stories unfold, we have something to entertain and
            put a smile on everyone’s face.`,
  paragraphTwo:"Howfa?",
  buttonLabel:"Register to get Involved",
  reversed:true
    };
  return (
    <section
      className={`relative overflow-x-hidden h-[100vh] items-center bg-slate-200 justify-center ease-in duration-700 flex mt-0 mb-3 rounded-md right-4 ml-4  w-[100%]`}
    >
      <div className="absolute h-full wfull  grid grid-cols-1 lg:grid-cols-2 mt-0 top-0 border border-yellow-500  md:px-16 p-4">

         <div className="flex rounded-lg lg:w-full text-gray-900 text-centetext-gray-900r bg-gradient-to-br from-green-600 to-gray-800 font-bold text-4xl 
         justify-center right-0 px-4 py-8 items-center text-pretty italic font-serif">
        <Link href="/registr">{data.paragraphTwo}</Link> 
        </div>
        <blockquote className={`flex flex-col justify-evenly lg:w-full items-start leading-loose pr-3 pl-3 md:pl-24 lg:pl-24 rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8`}>

          <p className="font-semibold text-justify mt-4 text-gray-700">{data.paragraph}</p>
       
          <Link className="primary-button mt-4  pt-3 items-center text-center text-balance w-fit h-14" href="/registr">
            {data.buttonLabel}
          </Link>
   <div className="text-5xl mx-auto justify-between flex"><div className="p-5 text-green-700 hover:text-yellow-800"><BsTwitterX /></div> <div className="p-5 text-green-700 hover:text-yellow-800"><ImInstagram /></div> 
  <div className="p-5 text-green-700 hover:text-yellow-800"> <ImFacebook2 /></div>
   </div>
        
   </blockquote> </div>

    </section>
  );
};

export default Info;
