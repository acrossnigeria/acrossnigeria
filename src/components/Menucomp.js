import React from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

const Menucomp = ({ isOpen, toggle }) => {
 
   const logoutClickHandler = () => {
       signOut({ callbackUrl: '/login' });
      };
  return (
    <div
      className={`fixed transform ease-out duration-700 scrollbar-hide opacity-100 w-full object-cover overscroll-none h-screen bg-zinc-800 grid items-center ${
        isOpen ? "top-0" : "-top-full"
      }  ${isOpen ? "z-50" : "-z-50"} left-0`}
    >
      <div
        onClick={toggle}
        className="text-white text-3xl absolute top-4 right-5 bg-transparent outline-none cursor-pointer transition duration-500 hover:scale-150"
      >
        <FaTimes />
      </div>
      <div className="wrapper">
        <div className="grid grid-cols-1 text-2xl text-clampsize grid-rows-4 text-center transition ease-in-out duration-1000 mb-16 ">
        
            <div  className="row-span-1  mb-7">
              <Link
                className="w-1/4 text-left transition ease-in-out duration-500 hover:text-white"
                href="/about"
              >
               About
              </Link>
              <Link className="w-1/4 text-left transition ease-in-out duration-500 hover:text-white" onClick={logoutClickHandler}>Sign Out</Link>
            </div>
            <div  className="row-span-1  mb-7">
              <Link
                className="w-1/4 text-left transition ease-in-out duration-500 hover:text-white  "
                href="/products"
              >
               Products
              </Link>
              <Link className="w-1/4 text-left transition ease-in-out duration-500 hover:text-white" onClick={logoutClickHandler}>Sign Out</Link>
            </div>
            <div  className="row-span-1  mb-7">
              <Link
                className="w-1/4 text-left transition ease-in-out duration-500 hover:text-white  "
                href="/contact"
              >
          Contact Us
              </Link>
              <Link className="w-1/4 text-left transition ease-in-out duration-500 hover:text-white" onClick={logoutClickHandler}>Sign Out</Link>
            </div>
     
        </div>
        <div className="flex justify-center">
          <div className="flex  w-28 h-9 border-0 cursor-pointer items-center font-semibold justify-center p-0 uppercase text-white bg-black transition duration-700 ease-in-out hover:bg-white hover:text-black">
            <Link href="#">Contact us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menucomp;
