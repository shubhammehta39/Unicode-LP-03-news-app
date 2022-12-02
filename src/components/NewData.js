import { useParams } from 'react-router-dom';
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


const NewData = () => {
    const [dataa, setDataa] = useState([]);

    useEffect(() => {

        const storage = localStorage.getItem("token")

        var config = {
            method: 'get',
            url: 'https://unicode-lp.onrender.com/news',
            headers: {
                'Authorization': 'Bearer ' + storage
            },

        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                setDataa(response.data.articles[index])
                console.log(response.data.articles[index])
                // console.log((response.data));

                // document.getElementById(output).innerHTML = text;

            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])
    const { index } = useParams();
    return (
        <>
            {index}
        </>
    );
}
export default NewData;