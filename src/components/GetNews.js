
// import { useState, useEffect } from "react";
import React, { useEffect, useState } from 'react'
import { Button, Grid, Typography, Card, CardMedia, CardContent, CardActions, Icon, CardActionArea, Box } from '@mui/material';

// import ReactDOM from 'react-dom'
// import "./App.css";
import './login.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
// import axios from "./axios.jsx";
// import { navigate, useNavigate } from "react-router-dom"





const GetNews = () => {
    const [dataa, setDataa] = useState([]);


    // const navigate = useNavigate()

    // const [myData, setMyData] = useState([]);
    // const [isError, setIsError] = useState("");

    //axios start

    // function getdata() {
    // var axios = require('axios');
    var qs = require('qs');
    // var text = data;
    var data = qs.stringify({

    });

    useEffect(() => {

        const storage = localStorage.getItem("token")

        var config = {
            method: 'get',
            url: 'https://unicode-lp.onrender.com/news',
            headers: {
                'Authorization': 'Bearer ' + storage
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                setDataa(response.data)
                console.log(response.data[0])
                console.log((response.data));

                // document.getElementById(output).innerHTML = text;

            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])


    useEffect(() => {
        console.log(dataa.articles)
    }, [dataa])

    // var datanew = data.url;



    // export const NewsCard2Demo = React.memo(function NewsCard2() {

    return (
        // const text = data;


        <div id='output' className='data-box'>
            {/* <button onClick={getdata} >Get News</button> */}
            <Grid container spacing={3} fullWidth    >
                {dataa !== [] && dataa?.articles?.map((data, index) => (
                    // <div className='col-lg-4'>
                    <Grid item xs={4} >
                        <Card>
                            <CardMedia
                                component="img"
                                height="240"
                                // image="/static/images/cards/contemplative-reptile.jpg"
                                // alt="green iguana"
                                image={data.urlToImage}

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data?.title?.slice(0, 40)}........
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {data?.description?.slice(0, 120)}....
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={"/GetNews/" + index}>
                                    <Button size="small" >Share</Button>
                                </Link>
                                <Button size="small" href={data.url} >Read More</Button>
                            </CardActions>
                        </Card>
                    </Grid>))}


            </Grid >
        </div>);

}
/* 
{/* <div>
{/* <Card className={"MuiNewsCard--01"}>
                    <CardMedia
                        className={"MuiCardMedia-root"}
                        // image={
                        //     "https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
                        // }
                        height="200"
                    // image={data.urlToImage}
                    >
                        <Typography className={"MuiTypography--category"}>NEWS</Typography>
                    </CardMedia>
                    <CardContent className={"MuiCardContent-root"}>
                        <Typography
                            className={"MuiTypography--overline"}
                            variant={"overline"}
                            gutterBottom
                        >
                            March 20 2019
                        </Typography>
                        <Typography
                            className={"MuiTypography--heading"}
                            variant={"h6"}
                            gutterBottom
                            //   </CardContent>  >{title.slice(0, 30)}...

                                </Typography>
                <Typography className={"MuiTypography--subheading"} variant={"caption"}>
                                   // {.description.slice(0, 150)}
                </Typography>
            </CardContent>
            <CardActions className={"MuiCardActions-root"}>
                <Button color={"primary"} fullWidth>
                    Find Out More <Icon>chevron_right_rounded</Icon>
                </Button>
            </CardActions>
        </Card> * /

                    // </Grid>

                    // </div> </Grid>

            //     }
            // </Grid >


                    // </div >






                    // console.log(data)
                // );





// }

//axios end


//usingnfetch

// function getMyPostData() {

// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1pa…1MjF9.RjQtVhxA2beqKlyikRV9OrfspUx-E9ZzxpmMRTPs6_0 ");
// var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     // body: urlencoded,
//     redirect: 'follow'
// };

// fetch("https://unicode-lp.onrender.com/news", requestOptions)
// .then(response => response.text())
// .then(result => console.log(result))
// .then(result => {
//     let output;
//     output = '<h2>news feed </h2>';
//     data.forEach(function (news) {
//         output +=
//             `<h4>${news.title}</h4>
//         <p>${news.description}</p>`
//     });

// .catch(error => console.log('error', error));

// };
// document.getElementById('output').innerHTML = output;


// };

// using fetch ends

// return getMyPostData();

//using axios



// var axios = require('axios');
// var qs = require('qs');
// var data = qs.stringify({
//     'username': 'MihirShinde',
//     'password': 'mihir'
// });
// var config = {
//     method: 'post',
//     url: 'https://unicode-lp.onrender.com/api/auth/signin',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     data: data
// };
// return (

//     axios(config)
//         .then(function (response) {
//             console.log(response.data.token)
//             if (response.data.token) {
//                 navigate('/home')
//             };
//         })
//         .catch(function (error) {
//             console.log(error);
//         })

//using axios end




// const getMyPostData = async () => {
//     try {
//         const res = await axios.get("https://unicode-lp.onrender.com/news");
//         setMyData(res.data);
//     } catch (error) {
//         setIsError(error.message);
//     }
// };


// useEffect(() => {
//     getMyPostData();
// }, []);


// <>

// {isError !== "" && <h2>{isError}</h2>} */

//  <div className="grid">
//         {data.slice(0, 9).map((news) => {
//             const { title, description } = news;
//             return (
//                 <div col-md-4>
//                     <div className="card">
//                         <h2>{title}</h2>
//                         <p>{description}</p>
//                     </div>
//                 </div>
//             );
//         })}
//     </div>
// </>
// }






export default GetNews;