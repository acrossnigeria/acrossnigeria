import Layout from '@/components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const vids=[{
  slug:"tweTwe",
  title:"Twe Twe",
  description:"Some Description"},
{slug:"musik",title:"Musik", description:"Some Description"},
{slug:"dance", title: "Dance",description:"Some Description"},
{slug:"skitsPranks",title:"Skits & Pranks",description:"Some Description"
},];
const pics=[{
  slug:"naijaFaces",
  title:"NAIJA FACES",},
{slug:"sexxypix",
 title:"SEXXY PIX"},
 {slug:"naijaScenes",
 title:"NAIJA SCENES"
},
{slug:"naijaNature",
 title:"NAIJA NATURE"
}];

const Index = () => {
  const [selectedSection, setSelectedSection] = useState(null);
 const router=useRouter()
  const handleVideoClick = () => {
    setSelectedSection('videos');
  };

  const handlePictureClick = () => {
    setSelectedSection('pictures');
  };

  return (
    <Layout>
      <div className='px-6 py-4 mt-4 font-semibold mb-6 bg-green-700 w-fit ml-10 rounded-xl'>
        <Link href="naijavibes/upload" >Get involved</Link>
      </div>
      <div
        className={`font-bold text-lg p-10 mx-auto rounded-md mb-2 
        w-fit cursor-pointer transition-transform transform hover:scale-105 ${selectedSection === 'videos' ? 
        'bg-yellow-700' : 'bg-gray-200'}`}
        onClick={handleVideoClick}
      >
        NaijaVibes Videos
      </div>
      {/* Render respective lists based on selected section */}
      {selectedSection === 'videos' && (
        <div className=" transform transition-y flex bg-yellow-700 flex-col items-center w-fit p-9 mx-auto mb-8">
          <p className="font-bold text-lg">Videos</p>
          <ul>
            {vids.map(({ slug, title }) => (
        <li
          key={slug}
          className="bg-yellow-700 border-b-2 border-gray-300 transition-colors duration-150 hover:bg-gray-300"
          onClick={() => router.push(`naijavibes/naijavideos/?cat=${slug}`)}
        >
          {title}
        </li>
      ))} </ul>
        </div>
      )}
      <div
        className={`font-bold text-lg p-10 mx-auto rounded-md mb-2 w-fit cursor-pointer transition-transform transform hover:scale-105 ${selectedSection === 'pictures' ? 'bg-yellow-700' : 'bg-gray-200'}`}
        onClick={handlePictureClick}
      >
        NaijaVibes Pictures
      </div>
      {/* Render respective lists based on selected section */}
      {selectedSection === 'pictures' && (
        <div className=" transform transition-y flex bg-yellow-700 flex-col items-center w-fit p-9 mx-auto mb-8">
          <p className="font-bold text-lg">Pictures</p>
          <ul>
            {pics.map(({ slug, title }) => (
        <li
          key={slug}
          className="bg-yellow-700 border-b-2 border-gray-300 transition-colors duration-150 hover:bg-gray-300"
          onClick={() => router.push(`naijavibes/naijaphotos/?cat=${slug}`)}
        >
          {title}
        </li>
      ))}
          </ul>
        </div>
      )}
    </Layout>
  );
}

export default Index;
