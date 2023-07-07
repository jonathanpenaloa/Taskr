import React from 'react';

const Register = () => {
    return (
        <div className="register-form">
            <form action="submit">
                
                <label htmlFor="">Full Name:</label>
                <input type="text" name="name"/>

                <label htmlFor="">Email:</label>
                <input type="email" name='email'/>
                
                <label htmlFor="">Password</label>
                <input type="password" name="password" required/>
                
                <button>register</button>
            </form>
        </div>
    );
}

export default Register;