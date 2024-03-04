import Layout from "@/components/Layout";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getError } from "../../utils/error";
import axios from "axios";
import CustomDatePicker from "@/components/DatePicker";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import { Datepicker } from "flowbite-react";



export default function Register(params) {

  const initialState={
        name:'',
        surname:'',
        email:'',
        phone:'',
        residence:'',
        password:'',
        gender:'',
  }

  const [state, setState]=useState(initialState)
  const [formComplete, setFormComplete]=useState(false);
    
  const [pass, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRepeatPasswordVisibility = () => {
    setRepeatPasswordVisible(!repeatPasswordVisible);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
      setState((state)=>{
        return {...state, password:event.target.value};
      });

  };
  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
    if (pass && event.target.value !== pass) {
      setPasswordMatchError("Passwords do not match");
       
    } else {
      setPasswordMatchError("");
       setState((state)=>{
        return {...state, password:event.target.value};
      });
    }
  };
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;
const [agreedToTerms, setAgreedToTerms] = useState(false);
 const handleCheckboxChange = () => {
    setAgreedToTerms(!agreedToTerms);
  };

  useEffect(() => {
    if (session?.email) {
      router.push(redirect || '/');
    }
    
  }, [router, session, redirect]);

  const handleChange= (event)=>{
    const {name, value}=event.target;
    setState({...state,[name]:value,})
  }
  const dob= new Date(selectedDate);
  const today=new Date();
  const age=today.getFullYear()-dob.getFullYear()
  console.log(state, "age is ", age)
 
  const { name, surname, email, phone, residence, password , gender}= state;
  useEffect(()=>{
  const isEmpty = Object.values(state).some((value) => value.trim() === '');
  if (isEmpty||age<18||!agreedToTerms){
    setFormComplete(false)
  }
  else{setFormComplete(true)}
  },[setFormComplete,age,agreedToTerms, state])

  const handleSubmit=()=>{
    if (!formComplete){
      console.log("some fields are missing")
      return;
    }


 async (event) => {
    event.preventDefault()
    if (!agreedToTerms) {
     console.log("Please agree to the terms.")
      return;
    }
    try { 
      console.log(name,surname,email,phone,residence,gender);
      await axios.post('./api/auth/signup', {
        name,
        surname,
        email,
        phone,
        residence,
        password,
       gender,
      });
      const result = await signIn('credentials', {
        name,
        redirect: false,
        email,
        password,
      });
      if (result.error) {
       console.log(result.error);
      }
    } catch (err) {
      console.log(getError(err));
    }
  };
 
 }


  return (
    <Layout title="Sign-Up">
       <div className="h-full p-6 bg-black bg-opacity-70 ">
      <h1 className="text-3xl font-bold mb-4 text-center">New User Registration</h1>
      <form
        className="max-w-xl mx-auto p-6 bg-black bg-opacity-70 rounded-md "
      onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="name"
          >
            First Name
          </label>
          <input
            className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
            type="text"
            id="name"
            name="name"
          onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="surname"
          >
            Surname
          </label>
          <input
            className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
            type="text"
            id="surname"
            name="surname"
          onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
            type="email"
            id="email"
            name="email"
          onChange={handleChange}
          />
        </div>
<div className="mb-4">
  <label className="block text-white text-sm font-semibold mb-2">
    Gender
  </label>
  <div className="flex space-x-4">
    <label className="flex items-center text-white">
      <input
        type="radio"
        id="male"
        name="gender"
        value="Male"
        onChange={handleChange}
        className="mr-2"
      />
      Male
    </label>
    <label className="flex items-center text-white">
      <input
        type="radio"
        id="female"
        name="gender"
        value="Female"
        onChange={handleChange}
        className="mr-2"
      />
      Female
    </label>
  </div>
</div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
            type="tel"
            id="phone"
            name="phone"
          onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="residence"
          >
            State of Residence
          </label>
          <input
            className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
            type="text"
            id="residence"
            name="residence"
          onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="dob"
          >
            Date of Birth
          </label>
         <Datepicker selecteddate={selectedDate} onChange={setSelectedDate}/>
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
                         />
            <span
              className="absolute top-0 right-0 mt-2 mr-2 text-white cursor-pointer focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "🙈" : "👁️"}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="repeatPassword"
          >
            Repeat Password
          </label>
          <div className="relative">
            <input
              className="w-full p-2 border-b-2 border-yellow-300 bg-transparent focus:outline-none focus:border-white"
              type={repeatPasswordVisible ? "text" : "password"}
              id="repeatPassword"
              name="repeatPassword"
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
           
            />
            <span
              className="absolute top-0 right-0 mt-2 mr-2 text-white cursor-pointer focus:outline-none"
              onClick={toggleRepeatPasswordVisibility}
            >
              {repeatPasswordVisible ? "🙈" : "👁️"}
            </span>
          </div>
          {passwordMatchError && (
            <p className="text-red-500 text-sm mt-1">{passwordMatchError}</p>
          )}
        </div>
              <div className="mb-4">
            <input
              type="checkbox"
              id="agreedToTerms"
              name="agreedToTerms"
              checked={agreedToTerms}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label
              className="text-white text-sm font-semibold"
              htmlFor="agreedToTerms"
            >
              I agree to the terms and conditions
            </label>
          </div>
        <div
          className="flex w-[100px] h-[30px] bg-green-500 my-auto text-white object-center justify-center font-semibold px-4 rounded-md
           hover:bg-green-600 focus:outline-none cursor-pointer focus:shadow-outline-green"> <button type="submit"
           ><span className="flex mx-auto my-auto object-contain">Proceed  {"   "} <FaArrowRight className="my-auto mr-0"/></span></button>
        </div>
        <div>If you already have an account, {" "} <Link href="/login"><span className="text-yellow-300 font-semibold"> Login Here</span></Link> </div>
        
      </form></div>
    </Layout>
  );
};
