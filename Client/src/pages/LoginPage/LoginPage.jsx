import React, { useContext, useEffect, useState } from 'react';
import { primaryContext } from '../../contexts/PrimaryContext';
import axios from 'axios';
import "./LoginPage.css";

const LoginPage = () => {


    const { setToken } = useContext(primaryContext);

    const [error, setErros] = useState('');
    const [formInputs, setFormInputs] = useState({ email: "", password: "" });

    
    const handleInputChanges = (e) => {
        setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

            try {
                let  response  = await axios({
                    method: "PUT",
                    url: "/login",
                    data: {
                        email: formInputs.email,
                        password: formInputs.password
                     }
                    });
                setFormInputs({ email: "", password: ""});
                setErros("");

               const jwtToken = response.data.token;

                setToken(jwtToken);

                localStorage.setItem("userToken", jwtToken);

            } catch (err) {
                console.log(err);
                setErros(err.response.data.message);
            }
    }

    return (
        <div className='login-container'>

            <form className="login-form" action="submit" onSubmit={handleSubmit}>
                <h1>Login</h1>

                <label>Email</label>
                <input 
                type="email" 
                name="email"
                value={formInputs.email}
                onChange={handleInputChanges}/>

                <label>Password</label>
                <input 
                type="password" 
                name="password"
                value={formInputs.password}
                onChange={handleInputChanges}/>

                <button>LOGIN</button>
                { error ? <p>{error}</p> : "" }
            </form>
        </div>
    );
}

export default LoginPage;
