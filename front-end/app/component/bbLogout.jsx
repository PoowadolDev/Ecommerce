'use client'

import { useAPIMethodGet } from "./data/fetchData"
function BBLogout() {
    const callLogout = async () => {
        try {
            const response = await useAPIMethodGet('/signout')
            console.log("Logout", response)
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }
    callLogout()
}

export {BBLogout}
