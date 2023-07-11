import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {


    return (
        <div className="nav-bar" >
            <Link to="/" >Register</Link>
            <Link to="/login" >Login</Link>
        </div>
    );
}

export default NavBar;
