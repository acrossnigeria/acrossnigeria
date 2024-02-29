import Image from 'next/image'
import React, { useState } from 'react'
import imag from "../../public/images/img1.jpg"
import Link from 'next/link';
import { signOut } from 'next-auth/react';

const AvatarDrop = () => {

    const [isOpen, setIsOpen] = useState(false);
       const toggle = () => {
        setIsOpen(!isOpen);
    }
    
   const logoutClickHandler = () => {
    
    signOut({ callbackUrl: '/login' });
      };

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";

    return (
        <>
            <div className="relative">
                <button
                    className="hover:text-blue-400"
                    onClick={toggle}
                > <Image className="w-8 h-8 me-2 rounded-full" src={imag} width={30} height={30} alt="user photo"/></button>
                <div className={`absolute top-8 z-30 w-[250px] min-h-[300px] flex flex-col py-4 bg-zinc-400 rounded-md ${transClass}`}>
                   <Link
                        onClick={()=>{logoutClickHandler,toggle}}
                        className="dropdown-link"
                        href="#"
                        >Sign Out</Link> <Link
                        onClick={toggle}
                        className="dropdown-link"
                        href="#"
                        >Profile</Link>
                </div>
            </div>
            {
                isOpen
                    ?
                    <div
                        className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
                        onClick={toggle}
                    ></div>
                    :
                    <></>
            }
        </>
    )
}


export default AvatarDrop

