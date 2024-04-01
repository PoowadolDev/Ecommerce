'use server'



export async function login(prevState, formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    if (email != 'admin@admin.com' || password != 'admin') {
        return { message : "Wrong email or password"}
    }
    return { message : "Login success"}

    console.log(email, password)
}