import React from "react";
import "./topbar.scss";
import { Link } from "react-router-dom";

export default function Topbar() {
    const user = false;
    return (
        <div className="topbar">
            <div className="topbarLeft">
                <i className="topbarIcon fab fa-facebook-square"></i>
                <i className="topbarIcon fab fa-twitter-square"></i>
                <i className="topbarIcon fab fa-pinterest-square"></i>
                <i className="topbarIcon fab fa-instagram-square"></i>
            </div>
            <div className="topbarCenter">
                <ul className="topbarList">
                    <li className="topbarListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topbarListItem">
                        <Link to="/" className="link">ABOUT</Link>
                    </li>
                    <li className="topbarListItem">
                        <Link to="/" className="link">CONTACT</Link>
                    </li>
                    <li className="topbarListItem">
                        <Link to="/" className="link">WRITE</Link>
                    </li>
                    <li className="topbarListItem">
                        { user && "LOGOUT" }
                    </li>
                </ul>
            </div>
            <div className="topbarRight">
                { 
                    user ? (
                        <img 
                            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                            alt="" 
                            className="topbarImg"
                        />

                    ) : (
                        <ul className="topbarList">
                            <li className="topbarListItem">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="topbarListItem">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="topbarSeachIcon fas fa-search"></i>
            </div>
        </div>
    )
}
