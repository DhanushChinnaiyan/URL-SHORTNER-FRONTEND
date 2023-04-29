import { Box, Button, CircularProgress, TextField } from '@mui/material'
import React, { useState } from 'react'
import './UserEntry.css'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory()
    const [message, setMessage] = useState()
    const [click, setClick] = useState(false)

    // validates through formik
    const { handleSubmit, handleBlur, handleChange, values } = useFormik(
        {
            initialValues: {
                email: "",
                password: ""
            },
            onSubmit: (details) => {
                loginFunction(details)
                setClick(true)
                setMessage()

            }
        }
    )

    // customer login

    const loginFunction = async (details) => {

        try {
            const response = await fetch("https://url-shortner-backend-itr5.onrender.com/login", {
                method: "POST",
                body: JSON.stringify(details),
                headers: {
                    "Content-Type": "application/json"
                }

            })
            const data = await response.json()

            setMessage(data.message)
            setClick(false)
            // if login successfully it will push to dashboard path
            if (data.token) {
                localStorage.setItem("usertoken", data.token)
                history.push("/")
            }

        } catch (error) {
            console.log("Login Error", error)
        }
    }

    return (
         <div className="formdiv">
            
            <form className='form' onSubmit={handleSubmit}>
            <div className="tittle">LOGIN</div>
            {
                message && <div className="message">{message}</div>
            }
                <TextField
                    required
                    label="EMAIL"
                    variant="outlined"
                    type='email'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                />
                <TextField
                    required
                    label="PASSWORD"
                    variant="outlined"
                    type='password'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    
                />

                <Button type='submit' variant='contained' color='success'>

                    {
                    click ? 
                    <Box sx={{ display: 'flex', justifyContent: "center" }}>
                        <CircularProgress color="inherit" size="24.8px"/>
                    </Box>
                        :
                        "LOGIN NOW"
                    }
                </Button>

               <a href="/signup" style={{textAlign:"center"}}>Create new account</a>



            </form>
        </div>
    )
}

export default Login