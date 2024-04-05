import Layout from "@/components/Layout";
import PaystackBtn from "@/components/PaystackBtn";
import axios from "axios";
import { getError } from "../../utils/error";
import { useRouter } from "next/router";
import { useContext,useEffect, useState } from "react";
import { Store } from '../../utils/Store';
import { signIn } from "next-auth/react";
export default function PayScreen (){
  const paystackLiveKey=process.env.PAYSTACK;
   const { state, dispatch } = useContext(Store);
  const {user:{userDetails},}= state;
const [loading, setLoading]=useState(false)
  const router=useRouter();

useEffect(() => {
    if (!userDetails[0]?.name) {
      router.push('/reg'); 
       }
      
  }, [router, userDetails]);
    const name=userDetails[0]?.name?? 'Unknownn';
 const paymentUpdate = async (ref) => {   
   const name=userDetails[0]?.name?? null;
   const surname=userDetails[0]?.surname?? null;
 const email=userDetails[0]?.email?? null;
 const phone= userDetails[0]?.phone?? null;
 const residence=userDetails[0]?.residence?? null;
 const dob=userDetails[0]?.dob?? null;
 const gender= userDetails[0]?.gender?? null;
 const password=userDetails[0]?.password?? null;
 if(name===null||surname===null||phone===null||residence===null||dob===null||password===null||gender===null){
  router.push(
    {
        pathname: '/reg',
        query:"Fill in all required parameters"
      }
  )
 }
  setLoading(true);
 try {

     const refInfo=ref.transaction
      await axios.post('/api/auth/signup', {
        name,
       surname, email, phone, residence, dob, gender, password, refInfo
      });

      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        console.log(result.error);
      }
      setLoading(false)
      router.push('/success')
    } catch (err) {
      console.log(getError(err))
    }   };
    return (
    <Layout>
       {loading&&<div className="absolute z-50 bg-white text-black text-center h-screen w-screen font-sans font-bold text-5xl bg-opacity-90">Submiting your Details, please wait</div>}
       <PaystackBtn pay={paymentUpdate} paystackKey={paystackLiveKey} amount={1000} email={userDetails[0]?.email?? null} purpose="Registration to use Our Products"/>

      </Layout>
    
    );

 }
