import Layout from '@/components/Layout'
import React, { useState } from 'react'
import db from '../../utils/db';
import Skits from '@/models/Skits';
import SkitDisp from '@/components/SkitDisp';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

export default function SkitsPage({skits}) {
    console.log(skits)
    const [display, setDisplay]=useState(false)
    const watch=()=>{
      setDisplay(true)
    }
  return (
    <Layout>
      <h2 className="h2 my-4">Latest Skits</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {skits.map((skit) => (
         <div key={skit._id} > <SkitDisp watch={watch}
            skit={skit}
           
          ></SkitDisp>
          {display&&(
            <div className="transform ease-in-out duration-1000 
            fixed inset-0 bg-gray-500/50 flex justify-center items-center z-50">
                <CldVideoPlayer
                    width="900"
                    height="800"
                    src={`${skit.url}`}
                    />
            </div>
          )}</div>
        ))}
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