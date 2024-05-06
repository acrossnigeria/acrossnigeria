import Image from 'next/image';
import React, { useState } from 'react';
import logo from "../../public/images/logo1.png";
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { status, data: session } = useSession();
const logoutClickHandler = () => {
    
    signOut({ callbackUrl: '/', redirect:true });
      };
      const[open,setOpen]=useState(false)
const toggleMenu=()=>{
  setOpen(!open);}
  return (
    <nav className="bg-gray-800 py-4">
      {/* Logo */}
      <Link href="/" className="flex items-center justify-center">
        <Image src={logo} alt="Logo"  className="h-8 w-8" />
      </Link>
      <p className='flex items-center justify-center text-white'>Across Nigeria reality show</p>

      {/* Dropdown Button */}
      {status === 'loading' ? (
                <div
                className="flex  w-[fit-content] p-1 h-9 cursor-pointer items-center font-semibold 
            justify-center uppercase text-white border-2 border-green-600  bg-green-600 transition duration-100  rounded-lg text-[10px]
            ease-in-out hover:bg-white hover:text-yellow-600 hover:border-2 hover:border-yellow-600 hover:scale-105 hover:rounded-sm "
              >
               Loading...
              </div>
              ) : session?.user ? (<div className={`flex relative flex-1 top-0 w-[fit-content] p-1 h-9 cursor-pointer items-center font-semibold 
            justify-center uppercase text-white border-2 border-green-600  transition duration-100  rounded-lg text-[10px]`}>
                <div className="flex justify-center w-full" onClick={toggleMenu}>{session.user.name}</div>
           {open && (
        <div className="fixed block top-12 flex-1 mr-3 w-16 origin-top-right bg-green-600 text-[8px] lg:text-sm divide-y divide-gray-100 rounded-md shadow-lg ring-1
         ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div className="py-1 flex" role="none">
            <a onClick={logoutClickHandler} className="text-gray-700 block px-3" role="menuitem">LogOut</a>
            </div>
          <div className="py-2 flex" role="none">
            <a onClick={()=>(router.push("/profile"))} className="text-gray-700 block px-6 " role="menuitem">Profile</a>
            </div>
        </div>
      )}</div>
                  /* <div
            className="flex  w-[fit-content] p-1 h-9 cursor-pointer items-center font-semibold 
        justify-center uppercase text-white border-2 border-green-600  bg-green-600 transition duration-100  rounded-lg text-[10px]
        ease-in-out hover:bg-white hover:text-yellow-600 hover:border-2 hover:border-yellow-600 hover:scale-105 hover:rounded-sm "
          > */
        
              ) : (

                <div
            className="flex  w-[fit-content] p-1 h-9 cursor-pointer items-center font-semibold 
        justify-center uppercase text-white border-2 border-green-600  bg-green-600 transition duration-100  rounded-lg text-[10px]
        ease-in-out hover:bg-white hover:text-yellow-600 hover:border-2 hover:border-yellow-600 hover:scale-105 hover:rounded-sm "
          >
           <Link href="/login" className="p-2 cursor-pointer" legacyBehavior>
                
                <a>  Login</a>
                </Link>
          </div>
                
              )}

      {/* Search Bar */}
      <div className="mt-4 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Menus */}
      <div className="mt-4 flex justify-center">
        {/* First Line Menus */}
        <div className="space-x-4">
          <Link href="/" className="text-white border-r-2 border-yellow-700 hover:text-green-500">
          Home
          </Link>
          <Link href="#" className="text-white border-x-2 border-yellow-700 hover:text-green-500">
            About
          </Link>
          <Link href="#" className="text-white border-x-2 border-yellow-700 hover:text-green-500">
            Our Products
          </Link>
          <Link href="#" className="text-white hover:text-green-500">
            Profile
          </Link>
        </div>
      </div>

      <div className="mt-2 flex justify-center">
        {/* Second Line Menus */}
        <div className="space-x-4">
          <Link href="/naijavibes" className="text-white hover:text-green-500">
            NaijaVibes
          </Link>
          <Link href="giveaway" className="text-white hover:text-green-500">
            Giveaway
          </Link>
          <Link href="skitsPage" className="text-white hover:text-green-500">
            Skits Across Naija
          </Link>
          <Link href="#" className="text-white hover:text-green-500">
            Menu 8
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
