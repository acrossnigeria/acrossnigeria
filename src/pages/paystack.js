
import Layout from "@/components/Layout";
import PaystackBtn from "@/components/PaystackBtn";
import axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../../utils/error";
import { useRouter } from "next/router";
import { useContext, useEffect} from "react";
import { Store } from "../../utils/Store";


 export default function PayScreen(){

  /*  const router = useRouter();
   const {state}= useContext(Store);
    const{user}=state;
    const {userDetails}=user;
   console.log("Before if statement")   
 const details = userDetails ? userDetails[0] : undefined;
useEffect(()=>{
  console.log("Before if statement")
  if (details.length===0) {
    router.push('/registr')
    }},[router, details]) */

 

const paymentUpdate = async (ref) => {   
 try {
  
     const refInfo=ref.transaction
     const detail={...details, refInfo:refInfo}
      await axios.post('/api/auth/signup', detail);

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
       <PaystackBtn pay={paymentUpdate} amount={1200} email="mail@dkd.com" purpose="Registration"/>

      </Layout>
    
    );
  };

 
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