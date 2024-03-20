import { useContext, } from "react";
import { Store } from '../../utils/Store';
import Layout from '@/components/Layout'
import { useRouter } from "next/router";


export default function Success() { 
    const router =useRouter()
    const { state, dispatch } = useContext(Store);
  const {user:{userDetails},}= state;
  return (
    <Layout><div className="bg-gray-300">
     <div >Congratulations {userDetails[0].name}</div>
     <div>You can now enjoy our Products</div>
     <div className="primary-button" onClick={()=>(router.push('/'))}>Click here to see our products</div>
     </div>
    </Layout>
  )
}


