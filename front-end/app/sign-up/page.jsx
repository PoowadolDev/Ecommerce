import SignUpForm from "../component/signup-form"
import { Suspense } from "react"

export default function SignUp() {

    return (
        <div className="h-dvh w-full py-10 px-24 shadow-2xl">
            <div className="border-2 border-slate-200 h-full w-full rounded-3xl bg-white px-10 py-16">
                <div className="grid grid-flow-col-dense grid-cols-2 h-full w-full ">
                    <div className="">
                        <div className="grid grid-rows bg-white justify-items-center">
                            <div className="text-black font-sans subpixel-antialiased font-bold text-6xl text-center my-5 bg-white">
                                Sign Up
                            </div>
                        <Suspense fallback='Loading...'>
                            <SignUpForm />
                        </Suspense>
                        </div>
                    </div>
                    <div className=" bg-slate-600">

                    </div>
                </div>
            </div>
        </div>
    )
}