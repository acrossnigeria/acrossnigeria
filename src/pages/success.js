import { useContext, } from "react";
import { Store } from '../../utils/Store';
import Layout from '@/components/Layout'
import { useRouter } from "next/router";


export default function Success() { 
    const router =useRouter()
    const { state, dispatch } = useContext(Store);
  const {user:{userDetails},}= state;
  const name=userDetails[0]?.name?? 'Unknown';
  return (
    <Layout><div className="p-14">
     <div className="font-semibold mb-6" >Congratulations {name}</div>
     <div className="font-semibold mb-6" >Welcome to Across Nigeria</div>
     <div className="mb-4">You can now enjoy our Products</div>
     <div className="w-fit font-semibold text-white px-8 py-2 mt-9 text-center rounded-md bg-green-800 hover:bg-green-900 active:bg-green-950" onClick={()=>(router.push('/'))}>Click to go Home</div>
     </div>
    </Layout>
  )
}


