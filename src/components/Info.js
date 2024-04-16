
import Link from "next/link";
import React from "react";
import { SocialIcon } from 'react-social-icons'
import tiktok from "../../public/images/soc_media/icons8-tiktok-188.png";
import youtube from "../../public/images/soc_media/icons8-youtube-188.png";
import linkedin from "../../public/images/soc_media/icons8-linkedin-188.png";
import instagram from "../../public/images/soc_media/icons8-instagram-94.png";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Info = ()=>{
    const { status, data: session } = useSession();
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

         <div className="flex rounded-lg lg:w-full text-gray-100 text-center w-full bg-gray-800 font-bold text-4xl 
         justify-center right-0 px-4 py-8 items-center text-pretty italic font-serif">
        <p>{data.paragraphTwo}</p> 
        </div>
        <blockquote className={`flex flex-col justify-evenly lg:w-full items-start leading-loose
         pr-3 pl-3 md:pl-24 lg:pl-24 rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8`}>

          <p className="font-semibold text-justify mt-4 text-gray-700">{data.paragraph}</p>
       
          <Link className={`mt-4 ${session?.user ? ("hidden"):("primary-button ")} pt-3 items-center text-center text-balance w-fit h-14`} href="/reg">
            {data.buttonLabel}
          </Link>
   <div className="text-8xl mt-4 mx-auto rounded-md justify-between bg-gray-100 flex">
     <SocialIcon className="mx-auto  w-9 h-7 px-0" bgColor="transparent"  fgColor="blue" network="facebook"/>
     <SocialIcon className="mx-auto w-9 h-7 px-0" bgColor="transparent"  fgColor="green" network="whatsapp"/>
    <SocialIcon className="mx-auto w-9 h-7 px-0" fgColor="black" bgColor="transparent" network="x"/>
 <Image  quality={100}  className="mx-4" src={tiktok} height={20} width={30} alt="tiktok"/>
 <Image quality={100} className="mx-4"  src={instagram} height={20} width={30} alt="Instagram"/>
 <Image  quality={100} className="mx-4" src={youtube} height={20} width={30} alt="youtube"/>
 <Image  quality={100} className="mx-4" src={linkedin} height={20} width={30} alt="linkedin"/>
   
   </div>
        
   </blockquote> </div>

 
  );
};

export default Info;
