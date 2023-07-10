import React, { useContext, useState} from 'react';
import axios from 'axios';

import { primarytContext } from '../../contexts/PrimaryContext';

const Register = () => {

    const {user, token } = useContext(primarytContext);

    const [formInputs, setFormInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    
    const handleInputChanges = (e) => {
        setFormInputs({
            ...formInputs, [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // send a req.body with the info from the form to db to register a new user
        let registeredNewUser = await axios({
            method: "POST",
            url: "http://localhost:3003/register",
            data: formInputs
        });

        console.log(registeredNewUser);


        // save the new user info user state var coming from Context 


        // store the user token to local storage

    }


    return (
        <div className="register-form" >
            <form action="submit" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                
                <label htmlFor="">Full Name:</label>
                <input 
                type="text" 
                name="name" 
                value={formInputs.name}
                onChange={handleInputChanges}
                />

                <label htmlFor="">Email:</label>
                <input 
                type="email" 
                name='email' 
                value={formInputs.email} 
                onChange={handleInputChanges}
                />
                
                <label htmlFor="">Password</label>
                <input 
                type="password" 
                name="password" 
                value={formInputs.password} 
                onChange={handleInputChanges} required/>
                
                <button>register</button>
            </form>
        </div>
    );
}

export default Register;