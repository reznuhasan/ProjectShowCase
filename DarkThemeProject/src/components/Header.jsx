import React, { useContext } from 'react'
import Styles from "../Styles/Header.module.css"
import ThemeContext from '../context/ThemeContext'
import { NavLink } from 'react-router-dom'
const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const handleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    return (
        <div className={(theme === "light") ? Styles.header : Styles.header2} onClick={handleTheme}>
            <h1>Header</h1>
            <div className="menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>

        </div>
    )
}

export default Header