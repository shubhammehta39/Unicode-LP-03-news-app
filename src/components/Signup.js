import React, { useState } from 'react'
import { Grid, Paper, TextField, Checkbox, FormGroup, FormControlLabel, Button, Link, Typography } from '@mui/material';
import './login.css'
import { Router, useNavigate } from 'react-router-dom'

import axios from 'axios';


function Signup() {



    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()


    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleFname = (e) => {
        setFname(e.target.value)
    }
    const handleLname = (e) => {
        setLname(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleApi = () => {
        console.log({ username, email, fname, lname, password })
        axios.post('https://unicode-lp.onrender.com/api/auth/signup', {
            username: username,
            email: email,
            firstName: fname,
            lastName: lname,
            password: password
        }).then(result => {
            // console.log(result.data.token)
            // if (result.data.token) {
            //     navigate('/home')
            // };
            alert('success')
            console.log(result.data)

            navigate('/LoginForm');
            // alert('success')
            // navigate('/Getnews');


        })
            .catch(error => {
                alert('service error')
                console.log(error)
            })
        // navigate('/Getnews');
    }



    return (



        <Grid>
            <Paper elevation={10} className="paper" >
                <Grid>
                    <h2 className='heading-login'>Sign Up</h2>
                </Grid>
                <><Grid className='box-username'>
                    <TextField id="outlined-basic" label="Username" onChange={handleUsername} variant="outlined" placeholder='enter username' fullWidth required />
                </Grid>
                    <Grid className='box-username'>
                        <TextField id="outlined-basic" label="email" onChange={handleEmail} variant="outlined" placeholder='enter email' fullWidth required />
                    </Grid>
                    <Grid className='box-username'>
                        <TextField id="outlined-basic" label="First Name" onChange={handleFname} variant="outlined" placeholder='enter First Name' fullWidth required />
                    </Grid>
                    <Grid className='box-username'>
                        <TextField id="outlined-basic" label="Last Name" onChange={handleLname} variant="outlined" placeholder='enter Last Name' fullWidth required />
                    </Grid>
                    <Grid className='box-username'>
                        <TextField id="outlined-basic" label="Password" onChange={handlePassword} variant="outlined" placeholder='enter Password' fullWidth required />
                    </Grid></>
                <Grid className='box-username'>
                    <div className='signin-btn'>
                        <Button variant="contained" onClick={() => handleApi()} fullWidth >Sign Up</Button>
                    </div>
                </Grid>
            </Paper>
        </Grid>
    );
}
export default Signup;
