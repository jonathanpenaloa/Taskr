import React from 'react';

const LoginPage = () => {

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
