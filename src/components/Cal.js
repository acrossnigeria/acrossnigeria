// components/Calendar.js
import React, { useState } from 'react';

const Cal = ({ availableDates, onSelectDate }) => {
  const today = new Date();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

  // Function to check if a date is available
  const isDateAvailable = (date) => !availableDates.includes(date.toISOString().split('T')[0]);

  // Function to handle date selection
  const handleSelectDate = (date) => {
    if (isDateAvailable(date)) {
      onSelectDate(date);
    }
  };

  // Function to generate calendar cells
  const generateCalendarCells = () => {
    const calendarCells = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarCells.push(<div key={`empty-${i}`} className="w-12 h-12"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), i);
      const isAvailable = isDateAvailable(date);
      calendarCells.push(
        <div
          key={i}
          className={`w-12 h-12 flex items-center justify-center cursor-pointer ${
            isAvailable ? 'bg-green-300' : 'bg-gray-200 cursor-not-allowed'
          }`}
          onClick={() => handleSelectDate(date)}
        >
          {i}
        </div>
      );
    }
    return calendarCells;
  };

  return (
    <div className="grid grid-cols-7 gap-1">
      <div className="col-span-7 flex justify-center">
        <h2 className="text-lg font-semibold">Select Date:</h2>
      </div>
      <div className="col-span-7 flex flex-wrap">{generateCalendarCells()}</div>
    </div>
  );
};

export default Cal;
