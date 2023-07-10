import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {


    return (
        <div className="nav-bar" >
            <Link to="/login" >Login</Link>
            <Link to="/" >Register</Link>
        </div>
    );
}

export default NavBar;
