import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Layout from '@/components/Layout';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
 const password = watch('password');
  const onSubmit = (data) => {
    console.log(data); // Replace with form submission logic
  };

  return (
    <Layout>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          {...register('name', { required: 'Name is required' })}
          placeholder="Name"
          className={`p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
            errors.name ? 'border-red-500' : ''
          }`}
        />
        <input
          type="text"
          {...register('surname', { required: 'Surname is required' })}
          placeholder="Surname"
          className={`p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
            errors.surname ? 'border-red-500' : ''
          }`}
        />
      </div>
      <div className="flex space-x-4 md:space-x-8">
        <input
          type="tel"
          {...register('phone', { required: 'Phone number is required' })}
          placeholder="Phone Number"
          className={`p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
            errors.phone ? 'border-red-500' : ''
          }`}
        />
        <select
          {...register('state', { required: 'Please select a state' })}
          className={`p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
            errors.state ? 'border-red-500' : ''
          }`}
        >
          <option value="">Select State</option>
          {/* Add your state options here */}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <input
          type="email"
          {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } })}
          placeholder="Email Address"
          className={`p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
            errors.email ? 'border-red-500' : ''
          }`}
        />
        <div className="relative">
          <input
            type={password ? 'text' : 'password'}
            {...register('password', { required: 'Password is required', minLength: 6 })}
            placeholder="Password"
            className={`p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
              errors.password ? 'border-red-500' : ''
            }`}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-2 text-gray-400 hover:text-blue-500 focus:outline-none"
            onClick={() => setPassword((prev) => !prev)}
          >
            {password ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <input
          type="password"
          {...register('confirmPassword', {
            required: 'Confirm password is required',
            validate: (value) =>
              value === data.password || 'Passwords do not match',
          })}
          placeholder="Confirm Password"
          className={`p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
            errors.confirmPassword ? 'border-red-500' : ''
          }`}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <DatePicker
          selected={dateOfBirth}
          onChange={(date) => setDateOfBirth(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Date of Birth"
          className={`p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
            errors.dateOfBirth ? 'border-red-500' : ''
          }`}
        />
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Gender:</span>
          <div className="flex space-x-2">
            <label htmlFor="male">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                {...register('gender', { required: 'Please select gender' })}
                className="focus:ring-1 focus:ring-blue-500"
              />
              Male
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                {...register('gender', { required: 'Please select gender' })}
                className="focus:ring-1 focus:ring-blue-500"
              />
              Female
            </label>
          </div>
          {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="terms"
          {...register('terms', { required: 'Please accept our terms' })}
          className="focus:ring-1 focus:ring-blue-500 h-5 w-5"
        />
        <label htmlFor="terms" className="text-gray-700">
          I accept the terms and conditions
        </label>
        {errors.terms && <span className="text-red-500 text-sm">{errors.terms.message}</span>}
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-center text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 disabled:bg-gray-400"
        disabled={errors.name || errors.surname || errors.phone || errors.state || errors.email || errors.password || errors.confirmPassword || errors.dateOfBirth || errors.gender || errors.terms}
      >
        Register
      </button>
    </form>
    </Layout>
  );
};

export default RegistrationForm;