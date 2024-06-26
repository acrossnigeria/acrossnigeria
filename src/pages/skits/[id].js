"use client"
import Layout from "@/components/Layout";
import Skits from "@/models/Skits";
import { useRouter } from "next/router";
import db from "../../../utils/db";
import { toast } from "react-toastify";
import { getError } from "../../../utils/error";
import axios from "axios";
import 'next-cloudinary/dist/cld-video-player.css';
import { useState } from "react";
import ReactPlayer from "react-player";
import PaystackBtn from "@/components/PaystackBtn";

export default function SkitScreen(props){
  const {skit}=props;
  const { query } = useRouter();
  const router= useRouter();
 const [amount, setAmount] = useState('');
  const [payment, setPayment] = useState(0);
  const [email, setEmail] = useState('');
  const[loadPay, setLoadPay]=useState(false);
  const[loadVote, setLoadVote]=useState(false);
if (!skit){
        return<Layout title="Skit not Found"><div>Skit not found</div></Layout>;
              }
  const handleChange = (e) => {
 const { name, value } = e.target;
    // Update state based on input field name
    if (name === 'amount') {
      if (/^\d*$/.test(value)) {
      setAmount(value);
      setPayment(value * 100); // Calculate payment amount
    } else {
      alert('Please enter only whole numbers.');
    }
    } else if (name === 'email') {
      setEmail(value);
    }
    // Check if the entered value is a whole number
   
  };
      
       const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send payment to server
    console.log(`Payment processed for ${payment} Naira`);
    setLoadPay(true)
  };
    const voteHandler=async()=>{
 try{
  setLoadVote(true)
  const id=skit._id;
      const result=await axios.post('/api/vote',{ id,amount});
      console.log("Result is:", result)
      toast.success("success")
      setLoadPay(false)
      setEmail('');
      setAmount("");
      setLoadVote(false);
      router.push("/skitsPage")
   }
   catch (err){
    toast.error(getError(err));
   }
    }

  return(
    <Layout title={skit.title}>
        <div className="top-0 w-[400px] h-[300px] mt-0 mx-auto">
<ReactPlayer
width="400px"
height="300px"
url={skit.url}
controls={true}
pip={true}

/></div><div>
            
      <form onSubmit={handleSubmit} className="border border-gray-300 p-4 max-w-md mx-auto">
        <h1 className="text-3xl font-semibold">{skit.title.toUpperCase()} is contesting for best Skit in <span className="font-bold italic">Skits Across Naija </span></h1>
        <h2 className="text-2xl font-semibold">You can help it win by voting</h2>
        <h2 className="text-2xl font-semibold mb-6">Each Vote costs &#8358;100, you can send as many Votes as possible</h2>
   <label htmlFor="email" className="block text-xl font-semibold mb-2">Kindly enter your email:</label>
      <input 
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
        className="border border-gray-300 p-2 mb-4 w-full" // Apply Tailwind classes for input styling
        required
      />
  <label className="block text-xl font-semibold mb-2" htmlFor="amount">Enter Number of Votes:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        className="border border-gray-300 p-2 mb-4 w-full"
        value={amount.toLocaleString()}
        onChange={handleChange}
        pattern="\d*" // Allow only numbers
        title="Please enter only numbers"
        required
      />
    {amount&& <button className="bg-yellow-300 text-black font-semibold py-2 cursor-pointer px-4 mx-auto rounded" 
    type="submit">Pay &#8358;{payment.toLocaleString()} Naira
    </button>} 
</form>
<div>
   {loadPay&&(<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                 <div className="w-fit h-fit p-2 font-semibold text-lg rounded-md cursor-pointer absolute left-2 top-20 z-50 bg-yellow-700" 
                onClick={()=>(setLoadPay(false))}>Close</div>
    <PaystackBtn pay={voteHandler} 
            amount={payment} email={email}
            purpose={`Vote for ${skit.title}`}/></div>)}

        {loadVote&&(<div className="fixed inset-0 top-0 h-screen px-20  w-screen z-50 
        left-0 bg-opacity-85 bg-slate-950 text-gray-200 rounded-lg pt-56">wait while we collate your votes</div>)}
</div>
        
        </div>
        
    </Layout>
  )
}


export async function getServerSideProps(context) {
  const { params } = context;

  const { id } = params;
  await db.connect();
  const skit = await Skits.findById(id ).lean();
  await db.disconnect();
  return {
    props: {
      skit: skit ? db.convertDocToObj(skit) : null,
    },
  };
}


