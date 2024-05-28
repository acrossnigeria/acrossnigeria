
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
  reversed:true
    };
  return (
      <div className="relative h-full wfull  grid grid-cols-1 mt-0 top-0 border-b-1 pb-4 px-4 border-b-gray-700">
        
         <div className="flex lg:w-full text-green-950  w-full font-bold text-6xl 
          right-0 pt-8  text-pretty">
        <span className="w-full font-extrabold tracking-widest">HOWFA?</span> 
        </div>
            <p className="font-semibold text-left mt-4 text-xl mb-4 text-gray-700">{data.paragraph}</p>
       
          <Link className={`mt-6  mb-4 ${session?.user ? ("hidden"):("bg-green-950")} 
          pt-3 px-4 rounded-md tracking-tight items-center text-center text-white text-balance w-fit h-14`} href="/reg">
          {"Register to get Involved".toUpperCase()}
          </Link>
   <div className="text-8xl mt-6 mb-6 mx-auto rounded-md justify-between bg-gray-100 flex">
     <SocialIcon className="mx-auto  w-9 h-7 px-0" bgColor="transparent"  fgColor="blue" network="facebook"/>
     <SocialIcon className="mx-auto w-9 h-7 px-0" bgColor="transparent"  fgColor="green" network="whatsapp"/>
    <SocialIcon className="mx-auto w-9 h-7 px-0" fgColor="black" bgColor="transparent" network="x"/>
 <Image  quality={100}  className="mx-4" src={tiktok} height={20} width={30} alt="tiktok"/>
 <Image quality={100} className="mx-4"  src={instagram} height={20} width={30} alt="Instagram"/>
 <Image  quality={100} className="mx-4" src={youtube} height={20} width={30} alt="youtube"/>
 <Image  quality={100} className="mx-4" src={linkedin} height={20} width={30} alt="linkedin"/>
   
   </div>
        
   </div>

 
  );
};

export default Info;
