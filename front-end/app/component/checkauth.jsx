'use server'
import axios from 'axios';

export default async function CheckAuth({ backend_api}) {
    const response = await axios.get(`${backend_api}/auth`);
    console.log(response.data)
    return response.data
}