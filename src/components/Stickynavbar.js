
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


export const menuData = [
  { title: "About", link: "/about" },
  { title: "Products", link: "/products" },
  { title: "Contact Us", link: "/contact" },
];
const StickyNavbar = ({toggle}) => {
  const { status, data: session } = useSession();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const[open,setOpen]=useState(false)

  const [query, setQuery] = useState("");
   const logoutClickHandler = () => {
    
    signOut({ callbackUrl: '/login' });
      };


  const submitHandler = (e) => {
    e.preventDefault();
    console.log(query);
  };
 


  return (
    <header className={` w-full overflow-hidden px-0`}>
          <nav
        className={`w-full top-0 flex items-center align-middle h-24 left-0 right-0 py-0 bg-gray-950 backdrop-blur-3xl 
        backdrop-opacity-5 bg-opacity-95 text-white transition duration-700 
        ease-in-out border-b-4 border-yellow-600 px-4 `}
      >
        <div className="flex absolute py-0 px-4 
outline-8 opacity-100  text-opacity-100 w-full">
          <div className="absolute right-0 left-0 lg:ml-10 w-[110px] p-1 text-center leading-tight origin-center content-center  mx-auto  h-full  md:justify-between">
            <Link href="/">
              {" "}
              <Image
                src={logo}
                alt="Logo"
                className="md:pl-2 w-[50px] mx-auto"
                placeholder="blur"
              />
               <span className="font-serif text-xs italic content-center text-center">An Adventure of a lifetime</span> 
            </Link>
          </div>
          
            <form
              onSubmit={submitHandler}
              className="mr-60 mb-6 mt-6 flex-auto collapse lg:visible md:flex md:items-center lg:align-center
               h-10 md:justify-center md:flex-row  md:mx-auto"
            >
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="rounded-tr-none text-gray-900 font-mono border-blue-400 border-1 w-60 rounded-br-none p-1 text-sm focus:ring-0"
                placeholder="Search products"
              />
              <button
                className="rounded rounded-tl-none rounded-bl-none hover:bg-yellow-600 bg-green-600 p-1 text-sm dark:text-black"
                type="submit"
                id="button-addon2"
              >
                <SearchIcon className="h-5 w-5"></SearchIcon>
              </button>
            </form>
            <div className="text-white flex cursor-pointer items-center font-semibold collapse lg:visible">
              {menuData.map((item) => (
                <Link key={item.link} href={item.link}>
                  <div className="flex items-center py-0 px-4 h-full font-semibold justify-center uppercase transition duration-400 ease-in-out hover:text-green-400">
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
              ) : session?.user ? (<div className={`grid grid-rows-1 cursor-pointer ${open&&"overflow-y-visible"} `}>
                <div onClick={()=>(setOpen(!open))}>{session.user.name}</div>
          <div className={`${!open&&"collapse"} ${open&&"translate-y-8 bg-slate-400 overflow-hidden"}`} onClick={logoutClickHandler}>Sign Out</div></div>
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
            <Image
        src={Bars}
        height={50}
        width={50}
        alt="menu"
        className="lg:collapse  bg-transparent flex absolute 
        top-0 right-0 transform -translate-x-1/2 translate-y-1/4 
         shadow-black shadow-xl outline-zinc-950 outline-8"
        onClick={toggle}
      />
       </div>
      </nav>
    </header>
  );
};

export default StickyNavbar;
