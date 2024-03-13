// pages/register.js

import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { getError } from '../../utils/error';
import Layout from '@/components/Layout';
import { Store } from '../../utils/Store';
import Cookies from 'js-cookie';

const Register = () => {
   const states = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
    'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo',
    'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa',
    'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
  ];
  const { data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const{user}=state;
  const {userDetails}=user;
  const router = useRouter();
  const {query}=useRouter();
  console.log("The Query is :", query)
  const { redirect } = router.query;
  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);
  const { handleSubmit, control, register, watch, formState: { errors }, setValue } = useForm();
const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const watchPassword = watch('password', '');
  useEffect(()=>{
    setValue('name',userDetails.name);
    setValue('surname',userDetails.surname);
    setValue('email',userDetails.name);
    setValue('phone',userDetails.name);
    setValue('state',userDetails.name);
    setValue('gender',userDetails.name);
   
  })
  const onSubmit =async ({ name, surname, email, phone, state, dob, gender, password }) => {
    const today=new Date();
    const age=today.getFullYear()-dob.getFullYear();
 const data={ name: name,surname:surname,email: email,phone: phone,state: state, age:age ,gender: gender,password: password};   
dispatch({type:'ADD_USER', payload: data })
Cookies.set(
  'user', JSON.stringify({...user,userDetails:data})
  );
  console.log(user,data)
  router.push('/regDetails')

  };

  return (
      <Layout title="Register">
        <div className="mx-auto mt-8 h-full">
       <h1 className="text-3xl font-bold mb-4 text-center">New User Registration</h1>
       <p className='mb4 mx-auto text-center justify-center' ><span>All fields are compulsory</span></p>
      <form className="max-w-xl mx-auto  m-4  border border-yellow-500 p-10 rounded-md" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            id="name"
            name='name'
            className="w-full border rounded-md py-2 px-3"
          />
          <span className="text-red-500 text-sm">{errors.name?.message}</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="surname">
            Surname
          </label>
          <input
            {...register('surname', { required: 'Surname is required' })}
            type="text"
            id='surname'
            name="surname"
            className="w-full border rounded-md py-2 px-3"
          />
          <span className="text-red-500 text-sm">{errors.surname?.message}</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            {...register('email', { required: 'Email is required' })}
            type="email"
            id="email"
            name="email"
            className="w-full border rounded-md py-2 px-3"
          />
          <span className="text-red-500 text-sm">{errors.surname?.message}</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
           Phone
          </label>
          <input
            {...register('phone', { required: 'Phone Number is required',  minLength: { value: 11, message: 'Password must be at least 11 characters' },})}
            type="tel"
            id="phone"
            name='phone'
            className="w-full border rounded-md py-2 px-3"
          />
          <span className="text-red-500 text-sm">{errors.surname?.message}</span>
        </div>

        {/* Add other form fields similarly */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
            State of Residence
          </label>
          <select name='state'
            {...register('state', { required: 'State is required' })}
            className="max-w-56  relative border rounded-md py-2 px-3 appearance-none"
          >
            <option value="" disabled hidden>Select State</option>
            {states.map((state) => (
              <option key={state} value={state} className='whitespace-nowrap block w-9'>{state}</option>
            ))}
          </select>
          <span className="text-red-500 text-sm">{errors.state?.message}</span>
        </div>


        <div className="mb-6">
          <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
            Date of Birth
          </label>
       <Controller
            render={({ field }) => (
             <div  className="w-full border rounded-md py-2 px-3">    <DatePicker
                {...field}
                dateFormat="dd/MM/yyyy"
                selected={field.value}
                scrollableMonthYearDropdown
                isClearable
                maxDate={new Date(new Date().setFullYear(new Date().getFullYear() - 18))}
                onChange={(dob) => field.onChange(dob)}
                showYearDropdown
                showMonthDropdown
                showIcon
               style={{ width: '100%', borderRadius: '0.375rem' }}
              /></div>
            )}
            control={control}
            name="dob"
            rules={{ required: 'Date of Birth is required' }}
          />
          <span className="text-red-500 text-sm">{errors.dob?.message}</span>
        </div>

                   <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
            Gender
          </label>
          <div className="relative">
            <select name='gender'
              {...register('gender', { required: 'Gender is required' })}
              className="w-full border rounded-md py-2 px-3 appearance-none"
            >
              <option value="" disabled hidden>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
          </div>
          <span className="text-red-500 text-sm">{errors.gender?.message}</span>
        </div>

                      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Password must be at least 8 characters' },
              })}
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="w-full border rounded-md py-2 px-3"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <span className="text-red-500 text-sm">{errors.password?.message}</span>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="relative">
            <input
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) => value === watchPassword || 'Passwords do not match',
              })}
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              className="w-full border rounded-md py-2 px-3"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <span className="text-red-500 text-sm">{errors.confirmPassword?.message}</span>
        </div>


        <div className="mb-6">
          <label className="flex items-center">
            <input {...register('acceptTerms', { required: 'You must accept the terms' })} type="checkbox" className="mr-2" />
            <span className="text-gray-700 text-sm font-bold">
              Accept our terms
            </span>
          </label>
          <span className="text-red-500 text-sm">{errors.acceptTerms?.message}</span>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  
</Layout>
  );
};

export default Register;
