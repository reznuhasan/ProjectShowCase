import React, { useContext } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Styles from "../Styles/Root.module.css"
import ThemeContext from '../context/ThemeContext'
const Root = () => {
    const {theme}=useContext(ThemeContext)
  return (
    <div className={(theme==="dark")?Styles.dark:Styles.light}>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Root