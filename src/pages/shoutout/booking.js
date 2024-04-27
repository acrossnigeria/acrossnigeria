// pages/booking.js

import { useState } from 'react';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import Calendar from '@/components/Calendar';



const BookingPage = () => {
  const router=useRouter();
  // Example available dates
  const unavailableDates = ['2024-04-29', '2024-05-21', '2024-04-22', '2024-04-23'];

// Convert date strings to Date objects
const unavailableDateObjects = unavailableDates.map(dateString => new Date(dateString));

// Example: Add 1 day to each date
const updatedUnavailableDates = unavailableDateObjects.map(date => {
    date.setDate(date.getDate() - 1);
    return date.toISOString().split('T')[0];
});


  const [selectedDate, setSelectedDate] = useState(null);
 

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    console.log(selectedDate)
  };
  const confirm=()=>{
    localStorage.setItem('selectedDate', selectedDate?.toDateString())
   router.push("/confirmbooking")
  }

  return (
    <Layout>
    <div  className='p-0 m-0 left-0 top-0 mx-auto '>
      <h1>Book a Date</h1>
      <Calendar unavailableDates={updatedUnavailableDates} selectedDate={selectedDate} onSelectDate={handleSelectDate} />
    
    {selectedDate && (    <div className="mt-4 text-sm">
          <p>You have Selected <span className='font-bold'>{selectedDate?.toDateString()}</span> for your SHOUTOUT</p>
    <p className='rounded-small bg-green-700 text-white w-fit text-lg cursor-pointer font-semibold p-2 mx-auto'
    onClick={confirm}>Click Here to Confirm</p>
    </div>)}
      
    </div></Layout>
  );
};
BookingPage.auth=true;
export default BookingPage;
