
// components/Navbar.js
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "../../public/images/logo1.png";
import SearchIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import Bars from "../../public/images/barsImage.svg"
import { CiUser } from "react-icons/ci";
import DropdownLink from "./Dropdownlink";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";



export const menuData = [
  { title: "About", link: "/about" },
  { title: "Products", link: "/products" },
  { title: "Contact-Us", link: "/contact" },
];
const StickyNavbar = () => {
  const { status, data: session } = useSession();

  const[open,setOpen]=useState(false)
const toggleMenu=()=>{
  setOpen(!open);}
  const router=useRouter();
  const [query, setQuery] = useState("");
   const logoutClickHandler = () => {
    
    signOut({ callbackUrl: '/login' });
      };


  const submitHandler = (e) => {
    e.preventDefault();
    console.log(query);
  };
 


  return (
    <header className={` w-full overflow-hidden mb-1 px-0`}>
          <nav
        className={`w-full top-0 flex items-center align-middle h-20 left-0 right-0 py-0 bg-gray-950 backdrop-blur-3xl 
        backdrop-opacity-5 bg-opacity-95 text-white border-b-4 border-yellow-600 px-1 mt-0`}
      >
        <div className="flex relative py-0 px-1
outline-8 opacity-100  text-opacity-100 w-full mt-0">
          <div className="absolute w-[40px] h-[50px] p-7 text-center md:ml-5 leading-tight origin-center content-center ml-0 left-0 top-0 justify-between mt-0">
            <Link href="/" legacyBehavior>
                  <Image
                src={logo}
                alt="Logo"
                fill
                className="pl-0 ml-0"
                placeholder="blur"

              />
            </Link>
          </div>
          
            <form
              onSubmit={submitHandler}
              className="flex items-center h-10 w-auto ml-20  justify-center md:ml-28 lg:ml-auto mx-auto"
            >
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="rounded-tr-none rounded-l-md text-gray-900 font-mono border-blue-400 border-1 w-20 md:w-auto rounded-br-none p-1 text-[7px] md:text-sm 
                focus:ring-0"
                placeholder="Search products"
              />
              <button
                className="rounded rounded-tl-none rounded-bl-none hover:bg-yellow-600 bg-green-600 p-1 text-sm dark:text-black"
                type="submit" 
                id="button-addon2"
              >
                <SearchIcon className="h-[8px] w[-8px] md:h-5 md:w-5"></SearchIcon>
              </button>
            </form>
            <div className="text-white flex cursor-pointer items-center md: ">
              {menuData.map((item) => (
                <Link key={item.link} href={item.link}>
                  <div className="flex items-center py-0 px-1 md:px-9 h-full font-mono text-[8px] md:text-sm md:font-semibold justify-center
                   uppercase transition duration-400 ease-in-out hover:text-green-400">
                    {item.title}
                  </div>
                </Link>
              ))}
           
              {status === 'loading' ? (
                <div
                className="flex  w-[fit-content] p-1 h-9 cursor-pointer items-center font-semibold 
            justify-center uppercase text-white border-2 border-green-600  bg-green-600 transition duration-100  rounded-lg text-[10px]
            ease-in-out hover:bg-white hover:text-yellow-600 hover:border-2 hover:border-yellow-600 hover:scale-105 hover:rounded-sm "
              >
               Loading...
              </div>
              ) : session?.user ? (<div className={`flex  w-[fit-content] p-1 h-9 cursor-pointer items-center font-semibold 
            justify-center uppercase text-white border-2 border-green-600  transition duration-100  rounded-lg text-[10px]`}>
                <div className="inline-flex justify-center w-full" onClick={toggleMenu}>{session.user.name}</div>
           {open && (
        <div className="absolute mr-8 mt-16 z w-fit origin-top-right bg-green-600 text-[10px] divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div className="py-2" role="none">
            <a onClick={logoutClickHandler} className="text-gray-700 block px-6 text-sm" role="menuitem">LogOut</a>
            </div>
          <div className="py-2" role="none">
            <a onClick={()=>(router.push("/profile"))} className="text-gray-700 block px-6 text-sm" role="menuitem">Profile</a>
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
          </div>
             </div>
      </nav>
    </header>
  );
};

export default StickyNavbar;
