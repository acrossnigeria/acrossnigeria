import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Store } from '../../utils/Store';

const Confirm = () => {
  const { state, dispatch } = useContext(Store);
  const {user:{userDetails},}= state;
  const router=useRouter();
 useEffect(()=>{
    if(!userDetails[0]?.name){setFormData({...formData,  name: "",
        surname:"",
    dob:"",
    email: "",
    password: "",
    phone:"",
    residence:"",
    gender:"",
    confirmPassword: "",
     acceptTerms: false, });}})


  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Confirm Details</h1>
    <p>{userDetails[0].name}</p>
    <p>{userDetails[0].surname}</p>

        <p>{userDetails[0].dob}</p>
      <p>{userDetails[0].email}</p>
      <p>{userDetails[0].gender}</p>
      <p>{userDetails[0].phone}</p>
      <p>{userDetails[0].residence}</p> 
      
      <p>Please verify your details above.</p>
     <div className='primary-button' onClick={()=>(router.push('/reg'))}> Back to edit</div> <div className='primary-button' onClick={()=>(router.push('/paystack'))}>Proceed to Pay</div> 
      
    </div>
  );
};

export default Confirm;
