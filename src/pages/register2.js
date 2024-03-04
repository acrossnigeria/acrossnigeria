import Layout from "@/components/Layout";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getError } from "../../utils/error";
import axios from "axios";
import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


export default function Register(params) {

  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch('password', '');

  const onSubmit = (data, event) => {
     event.preventDefault();

  // Check if there are any validation errors
  const errorKeys = Object.keys(errors);
   if(errorKeys.length===0)
   { console.log(data);
    // You can handle form submission here
  }
  };
  return (

    <Layout title="Sign-Up">
      
      <div className="h-full w-view p-6 mx-auto bg-black bg-opacity-70 ">
      <h1 className="text-3xl font-bold mb-4 text-center">New User Registration</h1>
      <form
        className="max-w-screen-lg p-6 bg-black bg-opacity-70 rounded-md "
    onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
         <label className="block text-white text-sm font-semibold mb-2" htmlFor="name" >Name:</label>
          <input className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
            type="text"
            id="name"
            name="name"
             {...register('name', { required: 'Name is required' })} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

      <div className="mb-4">
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="surname">Surname:</label>
        <input className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
            type="text"
            id="surname"
            name="surname"{...register('surname', { required: 'Surname is required' })} />
        {errors.surname && <p>{errors.surname.message}</p>}
      </div>

      <div>
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">Email:</label>
        <input className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
             id="email"
            name="email"  {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })} type="email" />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="phone">Phone:</label>
        <input className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
            type="tel"
            id="phone"
            name="phone" {...register('phone', { required: 'Phone is required' })}/>
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="residence">State of Residence:</label>
        <input className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
            type="text"
            id="residence"
            name="residence"{...register('residence', { required: 'State of Residence is required' })} />
        {errors.residence && <p>{errors.residence.message}</p>}
      </div>

      <div>
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="password">Password:</label>
        <input className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
            type="password"
            id="password"
            name="password" {...register('password', { required: 'Password is required' })} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="confirmPassword">Confirm Password:</label>
        <input className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
            type="password"
            id="confirmPassword"
            name="confirmPassword" {...register('confirmPassword', { validate: (value) => value === password || 'Passwords do not match' })} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <div>
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="gender">Gender:</label>
        <select className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
            type="text"
            id="gender"
            name="gender" {...register('gender', { required: 'Gender is required' })}>
          <option className="bg-black focus-within:border-green-700 border hover:bg-yellow-600" value="male">Male</option>
          <option className="bg-black hover:fill-yellow-500" value="female">Female</option>
         
        </select>
        {errors.gender && <p>{errors.gender.message}</p>}
      </div>
       <div>
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="dob">Date of Birth:</label>
        <Controller className="w-full"
          name="dob"
          control={control}
          rules={{
            required: 'Date of Birth is required'
                }
          }
          render={({ field }) => (
           <
            DatePicker  className="w-96 p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
                        {...field} dateFormat="dd/MM/yyyy"
                        showYearDropdown
                        showIcon
                        
                        scrollableYearDropdown
                        yearDropdownItemNumber={60}
                        maxDate={new Date(new Date().setFullYear(new Date().getFullYear() - 18))}
                        placeholderText="(d/m/y) For 18years +"
                        icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
        >
          <mask id="ipSApplication0">
            <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
              <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
              <path
                fill="#fff"
                d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
              ></path>
            </g>
          </mask>
          <path
            fill="currentColor"
            d="M0 0h48v48H0z"
            mask="url(#ipSApplication0)"
          ></path>
        </svg>
      }
/>
          )}
        />
        {errors.dob && <p>{errors.dob.message}</p>}
      </div>
      <div>
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Agree to Terms:</label>
        <Controller
          name="agreeTerms"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <input className="bg-transparent" type="checkbox" {...field} />
          )}
        />
        {errors.agreeTerms && <p>{errors.agreeTerms.message}</p>}
      </div>

     

      <button type="submit">Submit</button>
    </form>
       </div>
    </Layout>
  );
};
