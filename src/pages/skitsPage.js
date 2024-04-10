import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import db from '../../utils/db';
import Skits from '@/models/Skits';
import SkitDisp from '@/components/SkitDisp';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SkitsPage({skits}) {
    const router=useRouter()
    const [display, setDisplay]=useState(false);
    const[url,setUrl]=useState("");
      const [sortedSkits, setSortedSkits] = useState([]);

  useEffect(() => {
    // Sort the skits based on the votes property
    const sorted = skits.slice().sort((a, b) => b.votes - a.votes);
    setSortedSkits(sorted);
  }, [skits]);
    const watch=()=>{
      setDisplay(true)
    }
    console.log(url)
  return (
    <Layout>
      <Link href="/upload" className='top-3 right-0 mt-6 w-32 rounded-md 
      cursor-pointer bg-slate-500 text-center mx-auto'
       >UPload a Skit</Link>
      <h2 className="h2 my-4">Latest Skits</h2>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-5 lg:grid-cols-4" 
      onClick={()=>{setDisplay(true)
      console.log(url)}}>
        {skits.map((skit) => (
          
         <div key={skit._id}  onClick={(skit)=>setUrl(skit.url)}> <SkitDisp watch={watch}
            skit={skit}
           
          ></SkitDisp>
        </div>
        ))}
         
      </div>
      <div className=' mx-auto w-2/3'>
         <table>
        <thead>
          <tr>
            <th className='text-left px-2' >Title</th>
            {/* <th className='text-left px-2'>Votes</th> */}
            <th className='text-left px-2'>Creator</th>
            {/* Add more table headers for other skit properties as needed */}
          </tr>
        </thead>
        <tbody>
          {sortedSkits.map((skit, index) => (
            <tr key={index}>
              <td className='text-left px-3'>{skit.title}</td>
              {/* {<td className='text-left px-3'>{skit.votes}</td>} */}
              <td className='text-left px-3'>{skit?.name?? "No Name"}</td>
              {/* Add more table cells for other skit properties as needed */}
            </tr>
          ))}
        </tbody>
      </table>
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