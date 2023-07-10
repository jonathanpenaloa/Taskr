import React, { useContext } from 'react';

import PrimaryContextProvider, { primarytContext } from '../../contexts/PrimaryContext';

const Register = () => {

    const {user, token } = useContext(primarytContext);

    console.log(user, token);
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