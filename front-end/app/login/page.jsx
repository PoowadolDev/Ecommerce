'use client'

import { useFormState } from 'react-dom'
import { login } from "./action"

export default function Login() {

    const initState = {
        message : ''
    }

    const [state, formAction] = useFormState(login, initState)

    return (
        <div className="h-dvh w-full py-10 px-24 shadow-2xl">
            <div className="border-2 border-slate-200 h-full w-full rounded-3xl bg-white px-10 py-16">
                <div className="grid grid-flow-col-dense grid-cols-2 h-full w-full ">
                    <div className="">
                        <div className="grid grid-rows bg-white justify-items-center">
                            <div className="text-black font-sans subpixel-antialiased font-bold text-6xl text-center my-5 bg-white">
                                Login
                            </div>
                            <form action={formAction} className="text-center object-center bg-white">
                                <label className="input input-bordered flex items-center gap-2 input-lg w-full my-20 shadow-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 "><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                    <input type="text" name="email" className="grow" placeholder="Email"/>
                                </label>

                                <label className="input input-bordered flex items-center gap-2 input-lg w-full my-20 shadow-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                    <input type="password" name="password" placeholder="Password"/>
                                </label>

                                <button type="submit" className="btn btn-primary btn-lg w-full my-20 shadow-2xl">Login</button>
                            </form>
                        </div>
                    </div>
                    <div className=" bg-slate-600">

                    </div>
                </div>
            </div>
        </div>
    )
}