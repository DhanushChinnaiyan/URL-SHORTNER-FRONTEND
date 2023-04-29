import React, { useEffect } from 'react'
import { decodeToken } from 'react-jwt'
import { useHistory } from 'react-router-dom'

const MainDash = () => {

    const history = useHistory()
    useEffect(() => {

        // user token cheking process
        const tokenCheking = () => {
            // getting token from header
            const token = localStorage.getItem("usertoken")
            // replace to login 
            if (!token) return history.replace("/login")
            // validating the header token
            const user = decodeToken(token)
            // if header token is wrong then it will replace to login page and also remove the header token
            if (!user) {
                localStorage.removeItem("usertoken")
                history.replace("/login")
            } else {
                history.replace("/")
            }
        }

        tokenCheking()
    }, [])
    return (
        <div>MainDash</div>
    )
}

export default MainDash