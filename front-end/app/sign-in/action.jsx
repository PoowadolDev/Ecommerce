import { redirect } from 'next/navigation';
import  {useAPIMethodPost}  from '../component/data/fetchData';
export async function login(prevState, formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    const apiresult = await useAPIMethodPost('/login',{email: email, password: password})

    const data = await apiresult

    console.log(data.data['message'])

    if (data.data['message'] === 'Login Success') {
      redirect('/')
    }

    return {message : false}
}

