'use client'
// import { SignUp } from '../component/data/fetchData'
// import { useRouter } from 'next/router'
// import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation'
import { useAPIMethodPost } from '../component/data/fetchData'
export function  ActionSignUp(prevState, formData) {
    const name = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')
    // const router = useRouter()

    const callAPI = async () =>{
      const response = await useAPIMethodPost('/register',{name, email, password})

      console.log(response)
      if (response.data['message'] === "Create Success") {
        return redirect('/sign-in')
      }
      return response.data['message']
    }

    callAPI()

    // useEffect(() => {
    //     return response()
    // }, [])

    // const res = await SignUp({name, email, password})

    // console.log(res)

    // return "Sign Up Success"

    // return async () => {
    //   try {
    //     const response = await SignUp({name, email, password})
    //     // formData(response)
    //     console.log(response)
    //     return response
    //   } catch (error) {
    //     console.log(`Error: ${error}`)
    //   }
    // }
}

