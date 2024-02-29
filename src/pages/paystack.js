import Layout from "@/components/Layout";
import PaystackBtn from "@/components/PaystackBtn";
import axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../../utils/error";


 function payScreen(params){
const paymentUpdate = async (ref) => {
 
    const{reference, transaction}=ref;
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
    }
  };
    return (
    <Layout>
       <PaystackBtn pay={paymentUpdate} amount={1200} email="mail2chuka@gmail.com" purpose="Registration"/>

      </Layout>
    
    );
  };

  export default  payScreen;

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