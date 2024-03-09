import Layout from "@/components/Layout";
import PaystackBtn from "@/components/PaystackBtn";
import axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../../utils/error";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


 function PayScreen(){
 const [data,setData]=useState()
   const router = useRouter();
useEffect(() => {
    if (window.sessionStorage) {
       const storedData=window.sessionStorage.getItem("reginfo");
  setData(JSON.parse(storedData))
 }
    else{
        router.push(redirect || '/registr');
    }
  }, [data, router]);
console.log(data)

const paymentUpdate = async (ref) => {   
 try {
  
     const refInfo=ref.transaction
      await axios.post('/api/auth/signup', {
        name,
       surname, email, phone, state, age, gender, password, refInfo
      });

      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        console.log(result.error);
      }
    } catch (err) {
      console.log(getError(err))
    }
   /*  const{reference, transaction}=ref;
     console.log(reference,transaction)
    try {
      await axios.post('/api/payUpdate', {
        reference, transaction
      }).then((response) => {
        // Handle success
        toast.success(`${name} has been registered successfully`);
        console.log(response.data);
        seterrorState(false);
      });
    
      toast.success('Payment updated successfully');
     
    } catch (err) {
      toast.error(getError(err));
    } */
  };
    return (
    <Layout>
       <PaystackBtn pay={paymentUpdate} amount={1200} email="" purpose="Registration"/>

      </Layout>
    
    );
  };

  export default  PayScreen;

 /*  axios.post('/api/regUser', data)
      .then((response) => {
        // Handle success
        toast.success(`${name} has been registered successfully`);
        console.log(response.data);
        seterrorState(false);
      })
      .catch((error) => {
        // Handle error

        toast.error('There has been an Error, Please try again later');
        console.log(error.message);
        seterrorState(true);
      }); */