import React from "react";
import { Link } from "react-router-dom";

import "./login.scss";

export default function Login() {
    return (
        <div className="login">
        <span className="loginTitle">Login</span>
            <form className="loginForm">
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
                <button className="loginBtn">Login</button>
            </form>
            <button className="registerBtn">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    )
}
