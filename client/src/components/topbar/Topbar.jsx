import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

import "./topbar.scss";


export default function Topbar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }
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
                        <Link to="/write" className="link">WRITE</Link>
                    </li>
                    <li className="topbarListItem" onClick={handleLogout}>
                        { user && "LOGOUT" }
                    </li>
                </ul>
            </div>
            <div className="topbarRight">
                {user ? (
                    <Link to="/settings">
                        <img 
                            src={PF + user.profilePic} 
                            alt="" 
                            className="topbarImg"
                        />
                    </Link>
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
