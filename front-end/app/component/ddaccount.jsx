'use client'

import  Link  from "next/link";
import { BBLogout } from "./bbLogout";
import { useState , useEffect} from 'react'
// import { CheckAuth, Logout } from "./data/fetchData";
import  {useAPIMethodGet}  from "./data/fetchData"

export default function DDAccount() {
    const [res, setData] = useState(null)
    const callapi = async () => {
        const response = await useAPIMethodGet('/auth')
        console.log("Chekc Auth", response.data.message)
        setData(response.data.message)
    }
    useEffect(() => {
        callapi()
    }, [res])

    console.log("status", res)
    if (!res) {
        return (
            <li>
                <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" >
                <summary>
                    Welcome!
                </summary>
                </div>
                <ul tabIndex={0} className="dropdown-content z-50 menu p-2  shadow bg-base-100 rounded-box w-28">
                    <li>
                        <Link href="/sign-in">
                            Sign In
                        </Link>
                    </li>
                    <li>
                        <Link href="/sign-up">
                            Sign Up
                        </Link>
                    </li>
                </ul>
                </div>
            </li>
        )
    }
    else {
        return (
            <li>
                <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" >
                <summary>
                    Account
                </summary>
                </div>
                <ul tabIndex={0} className="dropdown-content z-50 menu p-2  shadow bg-base-100 rounded-box w-28">
                    <li>
                        <a>Profile</a>
                    </li>
                    <li>
                        <button onClick={BBLogout}>
                            <a>Sign Out</a>
                        </button>
                    </li>
                </ul>
                </div>
            </li>
        )
    }
}