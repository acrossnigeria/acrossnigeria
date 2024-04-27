
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import PaystackBtn from '@/components/PaystackBtn';
import { useSession } from 'next-auth/react';
function Confirmbooking() {
 const { data: session } = useSession();
  const[loadPay,setLoadPay]=useState(false);
  const [payment, setPayment]=useState(0);
  const router=useRouter();
  const[dateData, setDateData]=useState()
  useEffect(()=>{
    const selectedDate=localStorage.getItem('selectedDate')
    const amount=localStorage.getItem("amount")
    if(selectedDate&&amount){
     setDateData(selectedDate)
     setPayment(amount)
     console.log(new Date(selectedDate))
   
   }
          else{
            console.error('Selected date not found in localStorage')
          }
  },[]);
    const dateHandler= async()=>{
      await axios.post('api/booking?booking?save', dateData)

    }
   


  return (
    <Layout>
        <div className='cursor-pointer' onClick={()=>(router.back())}>back</div>
        <button className="bg-yellow-300 text-black font-semibold py-2 cursor-pointer px-4 mx-auto rounded" 
    type="submit">Pay &#8358;{payment?.toLocaleString()} Naira
    </button>
         {loadPay&&(<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                 <div className="w-fit h-fit p-2 font-semibold text-lg rounded-md cursor-pointer absolute left-2 top-20 z-50 bg-yellow-700" 
                onClick={()=>(setLoadPay(false))}>Close</div>
    <PaystackBtn pay={dateHandler} 
            amount={payment} email={session?.email}
            purpose={`Vote for ${skit.title}`}/></div>)}
{dateData}
    </Layout>
  )
}

export default Confirmbooking
