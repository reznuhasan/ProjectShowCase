import React from 'react'
import logo from "../assets/smileLogo.png"
import Styles from "../Styles/Header.module.css"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.header}>
                <div className={Styles.logo}>
                    <img src={logo} alt="" />
                    <h1>EverSmile</h1>
                </div>
                <div className={Styles.menu}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/doctors">Find Doctor</NavLink>
                    <NavLink to="/cabins">Cabins</NavLink>
                    <NavLink to="/test">Tests</NavLink>
                    <NavLink to="/nurses">Find Nurses</NavLink>
                </div>
            </div>
            <div className={Styles.auth}>
                <div className={Styles.icon}>
                    <FontAwesomeIcon icon={faUser} style={{ "fontSize": "25px" }} />
                    <FontAwesomeIcon icon={faSignInAlt} style={{ "fontSize": "20px" }} />
                </div>
            </div>
        </div>
    )
}

export default Header