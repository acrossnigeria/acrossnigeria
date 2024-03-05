import Layout from "@/components/Layout";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getError } from "../../utils/error";
import { toast } from "react-toastify";

export default function LoginScreen() {
    
 const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session!==null) {
        console.log(session)
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
    if (session) {
      console.log(session)
      router.push("/"); // Replace "/dashboard" with your desired page
    }
  };
  return (
    <Layout title="Login">
     
      <div className="h-screen w-screen mb-4 mx-auto p-24  border border-yellow-500 rounded-md">
      <form className=" mx-auto border sm:w-full md:w-[600px] lg:w-[600px] xl:w-[600px] 2xl:w-[600px] border-yellow-500 p-3 rounded-md" onSubmit={handleSubmit(submitHandler)}>
        <h1 className="mb-4 font-bold text-xl">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter valid email',
              },
            })}
            className="w-full text-black"
            id="email"
            autoFocus
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Please enter password',
              minLength: { value: 6, message: 'password is more than 5 chars' },
            })}
            className="w-full text-black"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4 ">
          <button className="primary-button">Login</button>
        </div>
        <div className="mb-4 font-semibold ">
          Don&apos;t have an account? &nbsp;
          <Link className="text-yellow-300 cursor-pointer hover:text-green-500"  href={`/registr?redirect=${redirect || '/'}`}>Register</Link>
        </div>
      </form></div>
    </Layout>
  );
};
