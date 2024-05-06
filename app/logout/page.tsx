"use client";

import configuredAuth from "../config/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'next/navigation'




export default function Logout() {


    const auth = getAuth(configuredAuth);
    const router = useRouter()

    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log("User signed out")
            router.push("/")

        }).catch((error) => {
            console.log(error)
        });
    }




    return <div >
        <h1 className="hover:text-gray-300" onClick={handleLogout}>Logout</h1>
    </div>
}