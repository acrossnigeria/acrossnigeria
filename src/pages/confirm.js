import React from 'react'; 
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Store } from '../../utils/Store';

const Confirm = () => {
  const { state, dispatch } = useContext(Store);
  const {user:{userDetails},}= state;
  const router=useRouter();
  const name=userDetails[0]?.name?? 'Unknown';
  const surname=userDetails[0]?.surname?? 'Unknown';
  const dob=userDetails[0]?.dob?? 'Unknown';
  const email=userDetails[0]?.email?? 'Unknown';
  const gender=userDetails[0]?.gender?? 'Unknown';
  const phone=userDetails[0]?.phone?? 'Unknown';
  const residence=userDetails[0]?.residence?? 'Unknown';


  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Confirm Details</h1>
    <span>Name</span><p className='mb4 p-3 text-lg font-semibold text-center'>{name}</p>
  <span>Name</span>  <p className='mb4 p-3 text-lg font-semibold text-center'>{surname}</p>
    <span>Name</span>    <p className='mb4 p-3 text-lg font-semibold text-center'>{dob}</p>
     <span>Name</span> <p className='mb4 p-3 text-lg font-semibold text-center'>{email}</p>
      <span>Name</span><p className='mb4 p-3 text-lg font-semibold text-center'>{gender}</p>
      <span>Name</span><p className='mb4 p-3 text-lg font-semibold text-center'>{phone}</p>
      <span>Name</span><p className='mb4 p-3 text-lg font-semibold text-center'>{residence}</p> 
      
      <p>Please verify your details above.</p>
     <div className='primary-button' onClick={()=>(router.push('/reg'))}> Back to edit</div> <div className='primary-button' onClick={()=>(router.push('/paystack'))}>Proceed to Pay</div> 
      
    </div>
  );
};

export default Confirm;
