import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { Store } from '../../utils/Store';
import Layout from '@/components/Layout';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Checkbox from '@/components/Checkbox';

const Register = () => {
   const nigeriaStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
    'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo',
    'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa',
    'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
  ];
    const { state, dispatch } = useContext(Store);
     const {user:{userDetails},}= state;
   const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [dayError, setDayError]=useState(false)
  const [yearError, setYearError]=useState(false)
  const [formattedDate, setFormattedDate] = useState('');

    const router = useRouter();
  const [value, setValue]=useState();
  const [formData, setFormData] = useState({
    name: '',
    surname:"",
    dob:'',
    email: '',
    gender:'',
    password: '',
    phone:'',
    residence:'',
    confirmPassword: '',
     acceptTerms: false, 
  });
  const handleDayChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and limit to 2 characters
    if (/^\d{0,2}$/.test(value)&&value<=31) {
      setDay(value);
      setDayError(false)
    }else{setDayError(true)}
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    const currentDate = new Date();
const currentYear = currentDate.getFullYear();
    // Allow only numbers and limit to 4 characters
    if (/^\d{0,4}$/.test(value)&&value<=(currentYear-18)) {
      setYear(value);
      setYearError(false)
      if(value.length>=4&&value<1900){
        setYearError(true)
        setYear("")}
          }
    else{setYearError(true)}
  };
useEffect(()=>{
  const formatEnteredDate = () => {
    // Ensure all parts of the date are entered
    if (day && month && year) {
      // Format the date as YYYY-MM-DD
      setFormattedDate(`${year}-${month}-${day.padStart(2, '0')}`);
      setFormData({...formData, dob:formattedDate})
    }
  };
  formatEnteredDate();
},[day,month, year,formattedDate])

 const today=new Date();
  useEffect(()=>{
    if(!userDetails[0]?.name){setFormData({...formData,  name: "",
        surname:"",
    dob:"",
    email: "",
    password: "",
    phone:"",
    residence:"",
    confirmPassword: "",
     acceptTerms: false, });}
     else{
      
setFormData({...formData,  name: userDetails[0].name,
      surname:userDetails[0].surname,
    dob:userDetails[0].dob,
    email: userDetails[0].email,
    password: userDetails[0].password,
    phone:userDetails[0].phone,
    gender:userDetails[0].gender,
    residence:userDetails[0].residence,
    confirmPassword: userDetails[0].password,
     acceptTerms: userDetails[0].acceptTerms, });
     }

  }, [])
 const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };
 const {user}= state;
  const  handleTermsCheckboxChange=(isChecked)=>{setFormData({...formData,acceptTerms:isChecked})}
  const handleSubmit = async (e) => {
    e.preventDefault();
 console.log(formData.phone)
   
    const dob=new Date(formData.dob);
     const age= today.getFullYear()-dob.getFullYear();
    if(age<18 ){
      return(alert("underage! cannot register below 18years old"));
    } else{
    try {
  
 dispatch({type:'RESET'})
dispatch({type:'ADD_USER', payload: formData })
Cookies.set(
  'user', JSON.stringify({...user,userDetails:formData})
  );
 
  router.push('/confirm')
      // Post data to confirmation page
      await router.push({
        pathname: '/confirm',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }}
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const passwordFieldType = showPassword ? 'text' : 'password';

  return (
    <Layout>
    <div className="max-w-4xl mx-auto bg-gray-200">
      <h1 className="text-2xl text-center font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto  m-4  border border-yellow-500 p-10 rounded-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="surname" className="block mb-2">Surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full"
            required
          />
        </div>
<div className='mb-4'>
  <label htmlFor="dob" className="block mb-2">Date of Birth</label>
           <div className="flex space-x-2 bg-white rounded-md border contain flex-shrink border-green-400">
         <input
          type="text"
          value={day}
          onChange={handleDayChange}
          placeholder="Day (DD)"
          className="col-span-1 border text-[10px] md:text-lg md:w-32 w-16  block appearance-none bg-white border-green-300 hover:border-green-500 px-2 py-0
           md:px-4 md:py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        /><span className='text-4xl'>/</span>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
       className="col-span-1 border text-[10px] md:text-lg md:w-40 w-20 accent-green-400 hover:accent-green-400   block appearance-none bg-white border-green-300 hover:border-green-500 px-2 py-0
       md:px-4 md:py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"

        >
          <option value="">--Select Month--</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select><span className='text-4xl'>/</span>
        <input
          type="text"
          value={year}
          onChange={handleYearChange}
          placeholder="Year (YYYY)"
          className="col-span-1 border text-[10px] md:text-lg md:w-40 flex-grow max-w-[80px] md:max-w-[140px] appearance-none bg-white border-green-300 hover:border-green-500 px-2 
          py-0 md:px-4 md:py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        />
      </div></div>
    {yearError&&<span className='text-red-600 text-sm'>Please only enter Years not Earlier than 1900 and not later than {today.getFullYear()-18}</span>}  
    {dayError&&<span className='text-red-600 text-sm'>Please only enter days between 1-31</span>}  
    
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2">Phone Number</label>
          <div className='w-full'>
          <PhoneInput 
          defaultCountry='ng'
          className="border rounded px-0 py-0 h-fit w-fit"
          required
          onChange={(phone)=>{
    setFormData((prevFormData) => ({ ...prevFormData, phone: phone }));
  }}
          name='phone'
          value={formData.phone}/></div>
        </div>
       <div className="mb-4">
          <label htmlFor="state" className="block mb-2">State of Residence</label>
          <select
            id="residence"
            name="residence"
            value={formData.residence}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full"
            required
          >
            <option value="">Select State</option>
            {nigeriaStates.map((residence) => (
              <option className=''  key={residence} value={residence}>{residence}</option>
            ))}
          </select>
        </div>
           <div className="mb-4">
          <label htmlFor="gender" className="block mb-2">Gender</label>
          <div className="flex">
            <label htmlFor="male" className="mr-4">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={formData.gender === 'male'}
                className="mr-2"
              />
              Male
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={formData.gender === 'female'}
                className="mr-2"
              />
              Female
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type={passwordFieldType}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border rounded px-4 py-2"
            required
          />  <button
              type="button"
              className="inset-y-0 right-0"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
            {formData.password &&
            formData.password.length<6 && (
              <p className="text-red-500 font-thin ">Passwords must have Six(6) or more characters</p>
          )}
        </div>
         <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
          <input
            type={passwordFieldType}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border rounded px-4 py-2"
            required
          />  <button
              type="button"
              className="inset-y-0 right-0 "
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
        </div>
        <div> {formData.confirmPassword &&
            formData.password !== formData.confirmPassword && (
              <p className="animate-bounce text-red-700 font-thin">Passwords don&apos;t match</p>
          )}</div>
           <div className="mb-4">
            <Checkbox handleTermsCheckboxChange={handleTermsCheckboxChange}/>
        
        </div><div className="flex justify-between px-4 py-2">
          {formData.name.length && formData.phone.length&&formData.surname.length&&formData.dob.length&&formData.email.length&&
            formData.password.length&&formData.phone.length>11&&formData.gender.length&&formData.residence.length&&formData.password.length>5&&formData.password===formData.confirmPassword &&formData.acceptTerms? (
            <button
              type="submit"
              className="text-slate-100 px-4 py-2 rounded-full bg-green-700 hover:bg-green-800 active:bg-green-950"
            >
              {' '}
              Register
            </button>
          ) : (
            <button
              type="submit"
              disabled={true}
              className="text-slate-100 text-3xl px-4 py-2 rounded-full bg-slate-400"
            >
              Register
            </button>
          )}
        </div>
      </form>
    </div></Layout>
  );
};

export default Register;
