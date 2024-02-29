// components/DatePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ selectedDate, onChange }) => {
  const [startDate, setStartDate] = useState(selectedDate || null);
 

  return (
    <DatePicker className='font-semibold max-w-xl min-w-full w-[520px] mx-auto border-b-2 border-yellow-300 border-0  bg-transparent focus:outline-none focus:border-white'
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        onChange(date);
      }}
      dateFormat="dd/MM/yyyy"
      yearDropdownItemNumber={60}
      isClearable
      showYearDropdown
      peekNextMonth
      scrollableYearDropdown
    />
  );
};

export default CustomDatePicker;
