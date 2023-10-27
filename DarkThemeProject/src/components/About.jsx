import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import Style from "../Styles/About.module.css"
const About = () => {
    const {theme}=useContext(ThemeContext)

  return (
    <div style={{
        "height":"90vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }}>
        <h1 className={theme==="light"?Style.text1:Style.text2}>Welcome To Our About Page</h1>
    </div>
  )
}

export default About