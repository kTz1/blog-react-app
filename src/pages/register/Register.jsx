import React from "react";
import { Link } from "react-router-dom";

import "./register.scss";

export default function Register() {
    return (
        <div className="register">
        <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input 
                    type="text" 
                    placeholder="Enter your username..." 
                />
                <label>Email</label>
                <input 
                    type="text" 
                    placeholder="Enter your email..." 
                />
                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="Enter your password..." 
                />
                <button className="registerBtn">Register</button>
            </form>
            <button className="registerLoginBtn">
                <Link className="link" to="/login">Login</Link>
            </button>
        </div>
    )
}
