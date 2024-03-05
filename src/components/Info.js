
import Link from "next/link";
import React from "react";

const Info = ()=>{
  const data={heading:"Across Nigeria",
  paragraph: ` We offer a variety of giveaways, game show and reality shows that
            cater to different tastes and interests. Whether you want to win
            amazing prizes, test your skills and knowledge about Nigeria, or
            watch captivating stories unfold, we have something to entertain and
            put a smile on everyone’s face. Our website is easy to use, secure,
            and mobile-friendly. You can access our content anytime, anywhere,
            on any device.`,
  paragraphTwo:"HOWFA you!?",
  buttonLabel:"Register to get Involved",
  reversed:true
    };
  return (
    <section
      className={`relative overflow-hidden overflow-x-hidden items-center justify-center ease-in duration-700 flex mt-2 mb-3  h-full w-[100%] px-6 py-6`}
    >
      <div className="p-[3rem calc((100vw-1300px)/2)] grid grid-cols-1 lg:grid-cols-2">
        <div
          className={`flex flex-col justify-evenly items-start leading-loose pr-3 pl-3 md:pl-24 lg:pl-24 ${
            data.reversed ? "order-2" : "order-first"
          } lg:${data.reversed ? "order-first" : "order-2"} text-lg`}
        >
          <h1 className="text-2xl font-bold uppercase mb-4">{data.heading}</h1>
          <p className="text-2xl font-semibold text-justify">{data.paragraph}</p>
       
          <Link className="primary-button mt-4  pt-3 items-center text-center text-balance w-full h-14" href="/registr">
            {data.buttonLabel}
          </Link>
        </div>
        <div className={`flex rounded-lg text-center bg-green-500 font-bold text-6xl justify-center px-4 py-8 items-center transform -rotate-60`}>
        <Link href="/registr">{data.paragraphTwo}</Link> 
        </div>
      </div>
    </section>
  );
};

export default Info;
