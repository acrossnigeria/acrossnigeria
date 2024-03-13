import { useContext } from "react";
import { Store } from "../../utils/Store";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import PaystackBtn from "@/components/PaystackBtn";

export default function UserDetailsScreen() {
    const router=useRouter();
    const {state}= useContext(Store);
    const{user}=state;
    const {userDetails}=user;
    const details=userDetails[0]
    
    
    return(
        <Layout>
            <div className="mb-5 block rounded-lg border-gray-300 shadow-md p-5">
                <h1>Confirm your Details</h1>
                <p><span>Name: </span>{details.name}</p>
                <p><span>Surname: </span>{details.surname}</p>
                <p><span>Email: </span>{details.email}</p>
                <p><span>Phone Number:</span>{details.phone}</p>
                <p><span>State of Residence:</span>{details.state}</p>
                <p><span>Age: </span>{details.age}</p>
                <p><span>Gender: </span>{details.gender}</p>
            </div>
            <div className="mb-4 flex justify-between">
          <button
            onClick={() => router.push('/registr')}
            type="button"
            className="primary-button"
          >
            Back
          </button>
            <PaystackBtn pay={paymentUpdate} amount={1200} email="mail@dkd.com" purpose="Registration"/>
                  </div>
        </Layout>
    )
    
};
