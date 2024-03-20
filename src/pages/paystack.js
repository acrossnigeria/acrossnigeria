import Layout from "@/components/Layout";
import PaystackBtn from "@/components/PaystackBtn";
import axios from "axios";
import { getError } from "../../utils/error";
import { useRouter } from "next/router";
import { useContext,useEffect, useState } from "react";
import { Store } from '../../utils/Store';
import { signIn } from "next-auth/react";
export default function PayScreen (){
   const { state, dispatch } = useContext(Store);
  const {user:{userDetails},}= state;

  const router=useRouter();

useEffect(() => {
    if (!userDetails[0]?.name) {
      router.push('/reg'); 
       }
      
  }, [router, userDetails]);
  
 const paymentUpdate = async (ref) => {   
   const name=userDetails[0].name
   const surname=userDetails[0].surname
 const email=userDetails[0].email
 const phone= userDetails[0].phone
 const residence=userDetails[0].residence
 const dob=userDetails[0].dob;
 const gender= userDetails[0].gender;
 const password=userDetails[0].password;
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
      router.push('/success')
    } catch (err) {
      console.log(getError(err))
    }   };
    return (
    <Layout>
       <PaystackBtn pay={paymentUpdate} amount={1000} email={userDetails[0].email} purpose="Registration to use Our Products"/>

      </Layout>
    
    );

 }
