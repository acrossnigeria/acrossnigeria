import Head from "next/head";
import Footer from "../components/Footer"; 
import StickyNavbar from "../components/Stickynavbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import Menucomp from "./Menucomp";
import Navbar from "../components/Navbar";

export default function Layout({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  
    return(
<>
      <Head>
        <title>{title ? title + "-Across Nigeria TV" : "Across Nigeria TV show"}</title>
        <meta name="description" content="App Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <ToastContainer position="top-center" limit={1} />
<StickyNavbar/>
 <div className="flex left-0 ml-0 w-full overflow-hidden min-h-fit flex-col justify-between">
        <main className="h-full w-screen overflow-hidden left-0 mx-auto  min-h-full">{children}</main>
       
      </div> <Footer/>
    </>)
}
