import { useSession } from "next-auth/react";
import { PaystackButton } from "react-paystack";

export default function PaystackBtn(props) {
//provide props for amount email key is proc.env.PAYSTACK
    const {amount, email, purpose}=props;

   const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_258dd6714519378dec10c40f602f6ab49c966f4d",
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
  
      <div className="p-6 bg-opacity-70 m-auto top-0 bottom-0 h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">{`You need to Pay ${amount}NGN for ${purpose}`}</h1>
    <div className="border-yellow-500 border h-8 w-40 rounded-lg bg-gray-900 text-white italic mx-auto text-center">
                           
                              <PaystackButton {...componentProps} />
                          
                                                       
        </div>
   </div>
    
    );
};