import React from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axiosInstance from '../axios';

const Logout = () => {
    const history = useHistory();

    useEffect(()=>{
    const response = axiosInstance.post ('accounts/logout/',{
        refresh_token: localStorage.getItem('refresh_token'),
    }).then((res) => {
        console.log(res)
    });
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    axiosInstance.defaults.headers['Authorization'] = null;
    history.push('/Home');


    });


    return (

        <div>
            Logout
        </div>
    )
}

export default Logout
