
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { ImFacebook2, ImInstagram } from "react-icons/im";
import { RiTiktokLine } from "react-icons/ri";

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
      <div className="relative h-full wfull  grid grid-cols-1 lg:grid-cols-2 mt-0 top-0 border border-yellow-500  md:px-16 p-4">

         <div className="flex rounded-lg lg:w-full text-gray-900 text-centetext-gray-900r bg-gradient-to-br
          from-green-600 to-gray-800 font-bold text-4xl 
         justify-center right-0 px-4 py-8 items-center text-pretty italic font-serif">
        <Link href="/registr">{data.paragraphTwo}</Link> 
        </div>
        <blockquote className={`flex flex-col justify-evenly lg:w-full items-start leading-loose
         pr-3 pl-3 md:pl-24 lg:pl-24 rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8`}>

          <p className="font-semibold text-justify mt-4 text-gray-700">{data.paragraph}</p>
       
          <Link className="primary-button mt-4  pt-3 items-center text-center text-balance w-fit h-14" href="/registr">
            {data.buttonLabel}
          </Link>
   <div className="text-5xl mt-4 mx-auto rounded-md justify-between bg-gray-900 flex">
    <ImFacebook2 className="text-blue-800 mr-4" />
         <BsTwitterX  className="text-white mr-4"/>
<ImInstagram className="text-orange-500 mr-4"/> <FaLinkedin className="text-blue-500 mr-4"/> 
<RiTiktokLine className="text-white outline-2 drop-shadow-sm shadow-pink-400 outline-pink-400 mr-4"/>

   </div>
        
   </blockquote> </div>

 
  );
};

export default Info;
