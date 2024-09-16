'use client' // Enables the use of client-side hooks in the component

import { useState } from 'react'
import axios from '@/lib/axios'
import POST from '../../hooks/postData'

export default function Home() {
    const [responseMessage, setResponseMessage] = useState('')
    const [loggedInUserEmail, setLoggedInUserEmail] = useState('')
    const [loggedInUsername, setLoggedInUsername] = useState('')

    const handleSubmit = async (e) => {
        const userData = await POST()
        console.log(userData)
        // e.preventDefault()
        // try {
        //     const response = await axios.post('/api/postData')
        //     setResponseMessage('logged in user data fetch successfully')
        //     setLoggedInUsername(response.data.name)
        //     setLoggedInUserEmail(response.data.email)
        // } catch (error) {
        //     setResponseMessage('User not logged in')
        //     setLoggedInUsername('')
        //     setLoggedInUserEmail('')
        // }
    }

    return (
        <div>
            <form >
                <div>
                    <label>Get logged in user data </label>

                </div>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}

            <div>
                <span>Name: {loggedInUsername}</span><br />
                <span>Email: {loggedInUserEmail}</span>
            </div>
        </div>
    )
}
