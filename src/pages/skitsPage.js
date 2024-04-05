import Layout from '@/components/Layout'
import React, { useState } from 'react'
import db from '../../utils/db';
import Skits from '@/models/Skits';
import SkitDisp from '@/components/SkitDisp';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import { useRouter } from 'next/router';

export default function SkitsPage({skits}) {
    console.log(skits)
    const router=useRouter()
    const [display, setDisplay]=useState(false);
    const[url,setUrl]=useState("");
    const watch=()=>{
      setDisplay(true)
    }
  return (
    <Layout>
      <div className='top-3 right-0 mt-6 w-32 rounded-md cursor-pointer bg-slate-500 text-center mx-auto'
       onClick={router.push("/upload")} >UPload a Skit</div>
      <h2 className="h2 my-4">Latest Skits</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {skits.map((skit) => (
         <div key={skit._id}  onClick={(skit)=>setUrl(skit.url)}> <SkitDisp watch={watch}
            skit={skit}
           
          ></SkitDisp>
         </div>
        ))}
         {display&&(
            <div className="transform ease-in-out duration-1000 
            fixed inset-0 bg-gray-500/50 flex justify-center items-center z-50">
                <CldVideoPlayer
                    width="900"
                    height="800"
                    src={`${url}`}
                    />
            </div>
          )}
      </div>
    </Layout>
  )
}



export async function getServerSideProps() {
  await db.connect();
  const skits = await Skits.find({}).lean();
  await db.disconnect()
  return {
    props: {
           skits: skits.map(db.convertDocToObj),
    },
  };
}