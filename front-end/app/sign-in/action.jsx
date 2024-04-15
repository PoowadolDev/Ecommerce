'use client'
// import axios from 'axios';
import { NextResponse } from 'next/server';
// import { useEffect } from 'react';
import  {useAPIMethodPost}  from '../component/data/fetchData';
export function login(prevState, formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    const callAPI = async () =>{
      const data = {email: email, password: password}
      const response = await useAPIMethodPost('/login', data)
      // console.log(response)
      return response
    }

    const response = callAPI()
    console.log(`On Sign In ${response.then( (response) => {
      return response.data['message']
    })}`)
    return 'Sign In Success'

    // useEffect(() => {
    //   callAPI()
    // })

    // return (
    //   <div>
    //     Sign In
    //   </div>
    // )


    // console.log(response.then( (response) => {
    //   return response.data['message']
    // }))
    // // console.log(response.headers['set-cookie'])

    // redirect('/')

        // cookies().set('jwt_token', '1')
    // const response = axios.post(`${backendUrl}/login`, {
    //   email: email,
    //   password: password
    // }, {
    //   withCredentials: true
    // }).then( (response) => {
    //   console.log(response)
    //   return response
    // })
}

