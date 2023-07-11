import React, { useContext } from 'react';
import { primarytContext } from '../../contexts/PrimaryContext';
import axios from 'axios';
import img from "../../assets/logo.png"
import "./LoginPage.css";

const LoginPage = () => {


    const { setToken, user } = useContext(primarytContext);

    /// store the local store == token 
    const handleLogin = async () => {
        let responds = await axios({
            path: "/login",
            method: "GET",
            data: {

            }
        })
    }

    return (
        <div className='login-container'>

            <form className="login-form" action="submit">
                <h1>Login</h1>

                <label>Email</label>
                <input type="email" name="email"/>

                <label>Password</label>
                <input type="password" name="password"/>

                <button>LOGIN</button>
                {/* { error ? <p>{error}</p> : "" } */}
            </form>
        </div>
    );
}

export default LoginPage;
