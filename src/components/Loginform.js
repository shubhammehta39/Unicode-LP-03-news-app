import React, { useEffect, useState } from 'react'
import { Grid, Paper, TextField, Checkbox, FormGroup, FormControlLabel, Button, Link, Typography } from '@mui/material';
import './login.css'
// import axios from "./axios.jsx";
// import { Route, Routes } from 'react-dom'
// import { useNavigate } from "react-dom"
import axios from 'axios'
import { Router, useNavigate } from 'react-router-dom'


function LoginForm() {
    // const navigate = useNavigate();  
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    // useEffect(() => {

    //     localStorage.setItem("username", JSON.stringify(username))
    //     localStorage.setItem("password", JSON.stringify(password))
    //     localStorage.setItem("token", JSON.stringify(token))

    // }, [password, username, token])

    // useEffect(() => {
    //     const handleApi = () => {
    //     console.log({ username, password })
    //     axios.post('https://unicode-lp.onrender.com/api/auth/signin', {
    //         username: username,
    //         password: password
    //     }).then(result => {
    //         // console.log(result.data.token)
    //         // if (result.data.token) {
    //         //     navigate('/home')
    //         // };

    //         console.log(result.data.token)
    //         // setToken(result.token)
    //         localStorage.setItem("token", result.data.token)
    //         localStorage.setItem("username", username)
    //         localStorage.setItem("password", password)
    //         alert('success')
    //         navigate('/Getnews');


    //     })
    //         .catch(error => {
    //             alert('service error')
    //             console.log(error)
    //         })
    //     // navigate('/Getnews');
    // }


    console.log({ username, password })
    const navigate = useNavigate()

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleApi = () => {
        console.log({ username, password })
        axios.post('https://unicode-lp.onrender.com/api/auth/signin', {
            username: username,
            password: password
        }).then(result => {
            // console.log(result.data.token)
            // if (result.data.token) {
            //     navigate('/home')
            // };

            console.log(result.data.token)
            // setToken(result.data.token)

            localStorage.setItem("token", result.data.token)
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)
            alert('success')
            navigate('/Getnews');


        })
            .catch(error => {
                alert('service error')
                console.log(error)
            })
        // navigate('/Getnews');
    }

    // const gotoNews = () => {
    //     if (result.success === true)
    //         <Routes>
    //             <Route path='/' element={< GetNews />} />

    //         </Routes>
    // } AISE ROUTES DEFINE NHI KAR SAKTE

    // onClick={handleApi}

    // const Form = () => {


    return (

        // <Router>
        <Grid >
            <Paper elevation={10} className="paper" >

                <Grid>
                    <h2 className='heading-login'>Login</h2>
                </Grid>
                <Grid className='box-username'>
                    <TextField id="outlined-basic" onChange={handleUsername} label="Username" variant="outlined" placeholder='enter username' fullWidth required />
                </Grid>

                <Grid className='box-username'>
                    <TextField id="outlined-basic" onChange={handlePassword} label="Password" variant="outlined" placeholder='enter password' fullWidth required type='password' />
                </Grid>
                <Grid className='box-username'>
                    {/* <Checkbox label='remember me' /> */}
                    <FormGroup className='formgroup-1'>
                        <FormControlLabel control={<Checkbox />} label="remember me" />
                    </FormGroup>
                    <div className='signin-btn'>
                        <Button variant="contained" fullWidth onClick={() => handleApi()}>Sign In</Button>
                    </div>
                    <div className="fpass">
                        <Link href="#" underline='hover' >Forgot Password?</Link>
                    </div>
                    <Typography >
                        <h6>Already have an account ?</h6>
                    </Typography>
                    <div className='sigup-btn'>
                        <Button variant="outlined" fullWidth>Sign Up</Button>

                    </div>

                </Grid>
                {/* <Button variant="contained" fullWidth>Sign In</Button> */}


            </Paper >

        </Grid >
        // </Router>
    );
}


export default LoginForm;