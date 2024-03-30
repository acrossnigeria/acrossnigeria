import { useSession } from "next-auth/react";
import { useState } from "react";
import { PaystackButton } from "react-paystack";

export default function PaystackBtn(props) {
//provide props for amount email key is proc.env.PAYSTACK
    const {amount, email, purpose}=props;
  
   const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_cbdf33dbafe37c266634416e1b99f1f6b87e709a",
  };
const handlePaystackSuccessAction = async (ref) => {
    props.pay(ref);
        // Implementation for whatever you want to do with reference and after success call.
   
  };
const handlePaystackCloseAction = () => {
    alert("The transaction was not completed");
    console.log("closed");
  };
const componentProps = {
    ...config,
    text: "Click to Pay",
    onSuccess: (ref) => handlePaystackSuccessAction(ref),
    onClose: handlePaystackCloseAction,
  };
   
  
    return (

       
<div className="fixed transform ease-in-out duration-1000 
inset-0 p-6  bg-white m-auto top-40 bottom-0 h-screen">
      <h1 className="text-3xl mt-72 font-bold mb-4 text-center">{`You need to Pay ${amount}NGN as ${purpose}`}</h1>
    <div className="border-yellow-500 border h-14 py-4 w-40 rounded-lg bg-green-700 text-white text-xl
     font-semibold italic mx-auto text-center">
                           
                              <PaystackButton {...componentProps} />
                          
                                                       
        </div>
   </div>
   
    );
};