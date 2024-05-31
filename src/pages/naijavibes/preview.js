import Layout from '@/components/Layout'
import axios from 'axios';
import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'next-share';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

function Preview() {
const [fileType,setFileType]=useState('');
const [name, setName]=useState('');
const [email,setEmail]=useState('');
const [url,setUrl]=useState('');
const [dataUrl,setDataUrl]=useState('');
const [mediaTitle, setMediaTitle]=useState('')
const [mediaDescription, setMediaDescription]= useState('');
const router=useRouter();
    const copyToClipboard = () => {
    navigator.clipboard.writeText(postUrl)
      .then(() => {
       toast.success('Link copied to clipboard!');
      })
      .catch((error) => {
        console.error('Unable to copy link: ', error);
      });
  };
  useEffect(()=>{
    setFileType(localStorage.getItem('filetype'))
    console.log("filetype",fileType)
    setName(localStorage.getItem('name'))
     console.log("name",name)
    setEmail(localStorage.getItem('email'))
    setMediaTitle(localStorage.getItem('mediaTitle'));
    setMediaDescription(localStorage.getItem('mediaDesc'));
    setUrl(localStorage.getItem('postUrl'))
    setDataUrl(localStorage.getItem('dataUrl'))
    const sendMail=async()=>{
  const outgoing="Across Nigeria <no-reply@acrossnig.com>";
        const recepient=email;
        const subject=`NaijaVibes Upload Success`;
        const heading=`Congratulations ${name}`
        const content= `Dear ${name} kindly share the following link with your friends ${url} to vote for your ${fileType==='videos'?'naijavideos':'naijaphotos'} `;
        const mailResult= await axios.post('/api/mail/mail',{outgoing,
        recepient, subject, content,heading
      });
      console.log(mailResult)
      console.log(fileType)}
    sendMail();
    },[])
 
  return (
    <Layout><div className='flex flex-col container p-5'> 
    
        {fileType==="videos"&&<div className="top-0 gap-4 w-[400px] h-[300px] mt-0 mx-auto">
                      <ReactPlayer
                      width="400px"
                      height="300px"
                      url={dataUrl}
                      controls={true}
                      pip={true}/>
                      </div>}

                      {fileType==="photos"&& <div className=" gap-4 top-0 px-5 w-fit h-fit mt-0 mb-4 mx-auto">
          <Image src={dataUrl} alt={mediaTitle} width={400} height={300} loading="eager" />
</div>}
            <div className='border border-gray-500 p-5'>
              <p className='text-3xl font-semibold'>{mediaTitle.toLocaleUpperCase()}</p>
              <p className='text-lg'>By {name}</p>
            </div>
            <div className='border border-gray-500'>
              {mediaDescription}
            </div>
  <div className="p-4 gap-4 items-center justify-center">
  <p className="gap-4 mb-4 mx-auto text-center w-full">Copy the Link below and send it to your friends to view and vote for your skit</p>
                  <div className="items-center justify-center mx-auto text-center block mb-4">
      <input
        type="text"
        value={url}
        readOnly
        className="border block mb-4 mx-auto justify-center text-center border-gray-300 rounded-md px-2 py-1 w-48"
      />
      
      <button
        onClick={copyToClipboard}
        className="bg-yellow-700 block mb-4 mx-auto justify-center text-center text-white px-4 py-1 rounded-md"
      >
        Copy
      </button>
    </div>
  </div>
  {/* <Share title={mediaTitle} url={url}/> */}
  <div>
    <FacebookShareButton url={url} quote={''}>
      <FacebookIcon size={32}  />
    </FacebookShareButton>
    <WhatsappShareButton url={url}><WhatsappIcon size={32}/></WhatsappShareButton>
    <TwitterShareButton url={url}><TwitterIcon size={32}/></TwitterShareButton>
    <TelegramShareButton url={url}><TelegramIcon size={32}/></TelegramShareButton>
  </div>
  </div>
  <div className="w-fit justify-center place-self-center 
  block flex-col text-white h-fit text-xs 
  font-bold md:text-lg md:font-semibold p-1  mb-4
   mxauto rounded-md cursor-pointer
   text-center bg-green-700" 
                 onClick={()=>(router.push("/naijavibes/"))}>Done</div>
    </Layout>
  )
}

export default Preview
