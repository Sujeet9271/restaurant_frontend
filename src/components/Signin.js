import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import axiosInstance from '../axios';
import './Signin.css'

const Signin = () => {



    const history = useHistory();
    const initialFormData = Object.freeze({

        email: '',
        password: '',


    })

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            //trimimg any whitespace
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post('/login/', {
            email: formData.email,
            password: formData.password
        })
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh);
                axiosInstance.defaults.headers['Authorization'] =
                    'JWT ' + localStorage.getItem('access_token');
                history.push('/orders/today');

            })
    }




    return (
        <div className=" signin_body">
            <div classname="signin">
                <form className='signin_form'>
                    <h1>SignIn</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="social"><i class="fa fa-google"></i></a>
                        <a href="#" class="social"><i class="fa fa-linkedin"></i></a>
                    </div>
                    <span>or use your email to login</span>

                    <input autoComplete='email' type='text' name='email' placeholder="Email" onChange={handleChange} />

                    < br />
                    <input autoComplete='password' type='password' name='password' placeholder="Password" onChange={handleChange} />


                    <Link to='/Forgotpassword'>
                        <h5>forgot password?</h5>
                    </Link>
                    <button onClick={handleSubmit} className='Signin__Button'>SignIn</button>
                    <p> Don't have an Account? <Link to="/Signup"><u> Create now</u></Link></p>
                </form>



            </div>
        </div>
    )
}

export default Signin