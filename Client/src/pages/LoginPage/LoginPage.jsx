import React, { useContext } from 'react';
import { primarytContext } from '../../contexts/PrimaryContext';

const LoginPage = () => {


    const { setToken, setUser } = useContext(primarytContext);

    return (
        <div className="login-form">
            <form action="submit">
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
