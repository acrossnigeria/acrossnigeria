import Head from "next/head";
import Footer from "../components/Footer"; 
import StickyNavbar from "../components/Stickynavbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ title, children }) {
  
    return(
<>
      <Head>
        <title>{title ? title + "Across Nigeria TV" : "Across Nigeria TV show"}</title>
        <meta name="description" content="App Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <ToastContainer position="top-center" limit={1} />
      <div className="flex min-h-screen flex-col justify-between">
   <StickyNavbar/>
        <main className="h-full  mx-auto mt-0 px-4 min-h-full mb-4">{children}</main>
        <Footer/>
      </div>
    </>)
}
