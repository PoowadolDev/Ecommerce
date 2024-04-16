'use client'
// import { SignUp } from '../component/data/fetchData'
// import { useRouter } from 'next/router'
// import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation'
import  {useAPIMethodPost}  from '../component/data/fetchData'
export async function ActionSignUp(prevState, formData) {
    const name = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')

	const apiresult = await useAPIMethodPost('/register',{name, email, password})

	const data = await apiresult

	console.log(data.data['message'])

	if (data.data['message'] === 'Create Success') {
		redirect('/sign-in')
	}

	return {message : false}
}

function closeAlert(id) {
	document.getElementById("alert").style.display = "none";
}
