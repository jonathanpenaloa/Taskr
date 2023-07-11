import React, { useContext } from 'react';
import { primarytContext } from '../../contexts/PrimaryContext';

const LoginPage = () => {


    const { setToken, user } = useContext(primarytContext);

    /// store the local store == token 
    console.log(user);

    return (
        <div className="login-form">
            <form action="submit">
                <h1>Login</h1>
                <label>Email</label>
                <input type="email" name="email"/>
                <label>Password</label>
                <input type="password" name="password"/>
                <button>Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
