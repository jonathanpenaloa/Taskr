import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { primarytContext } from '../../contexts/PrimaryContext';


const Register = () => {
    
    const navigate = useNavigate();
    const { setUser } = useContext(primarytContext);

    const [error, setErros] = useState('');
    const [formInputs, setFormInputs] = useState({ name: "", email: "", password: "" });

    
    const handleInputChanges = (e) => {
        setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
            try {
                let { response } = await axios({
                    method: "POST",
                    url: "/register",
                    data: formInputs
                });
                setUser({
                    email: formInputs.email,
                    name: formInputs.name
                });

                setFormInputs({ name: "", email: "", password: ""});
                setErros("");
                navigate("/login");
            } catch (err) {
                console.log(err);
                setErros(err.response.data.message);
            }
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
            { error ? <p>{error}</p> : "" }
        </div>
    );
}

export default Register;