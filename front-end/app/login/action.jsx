'use server'
import axios from 'axios';
export async function login(prevState, formData) {
    const email = formData.get('email')
    const password = formData.get('password')
    const backendUrl = process.env.BACKEND_URL;

    const response = await fetchData(backendUrl, email, password)
    console.log(response)

    return { message : "Login success"}
}

async function fetchData(backend_url, email, password) {
    try {
        const response = await axios.post(`${backend_url}/login`, {
            email: email,
            password: password
          })
        const data = response.data;
        // console.log(data)
        return data
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors appropriately (e.g., display an error message)
    }
  }

