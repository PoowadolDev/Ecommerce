'use client'

import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { redirect } from 'next/navigation';

const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
async function useAPIMethodPost(url, data) {
  console.log(`POST : ${backend_url}${url}`)
  return axios.post(`${backend_url}${url}`, data, {
          withCredentials: true
        }).then( (response) => {
          console.log(response.data)
          return response
      })
}

async function useAPIMethodGet(url) {
    console.log(`GET : ${backend_url}${url}`)
    return axios.get(`${backend_url}${url}`, {
              withCredentials: true
            }).then( (response) => {
              console.log(response.data)
              return response
    })
}

// async function SignUp({name, email, password}) {
//   return axios.post(`${backend_url}/register`, {
//     name: name,
//     email: email,
//     password: password
//   }, {
//     withCredentials: true
//   }).then((response) => {
//     console.log(response)
//     return response.data['message']
//   })
// }

// const useApi = async (url, method = 'GET',  options = {}) => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//           const response = await axios({
//               url:`${backend_url}${url}`,
//               method,
//               data: options.data, // Assuming data is in options.data
//           }, {
//             withCredentials: true
//           });
//           setData(response.data);
//       } catch (err) {
//           setError(err);
//       } finally {
//           setIsLoading(false);
//       }
//   };

//       fetchData();
//   }, []); // Dependency array ensures refetch on URL or option changes

//   return { data, isLoading, error };
// };

export {useAPIMethodGet, useAPIMethodPost} ;