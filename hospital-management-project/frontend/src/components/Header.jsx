import React, { useContext } from 'react'
import logo from "../assets/smileLogo.png"
import Styles from "../Styles/Header.module.css"
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import defaultImage from "../assets/defaultImage.png"
import { checkUser } from '../customHook/userHook'
import { FaOsi } from 'react-icons/fa6'


const Header = () => {
    const user=checkUser();
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
                {
                    (user===false)?<Link to="/register">
                    <div className={Styles.icon}>
                        <FontAwesomeIcon icon={faUser} style={{ "fontSize": "25px" }} />
                        <FontAwesomeIcon icon={faSignInAlt} style={{ "fontSize": "20px" }} />
                    </div>
                </Link>:
                <div className={Styles.userProfile}>
                   <img src={defaultImage} alt="" />
                </div>
                }
            </div>
        </div>
    )
}

export default Header