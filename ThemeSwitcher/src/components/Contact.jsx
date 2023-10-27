import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import Style from "../Styles/Contact.module.css"
const Contact = () => {
    const {theme}=useContext(ThemeContext)
    
  return (
    <div style={{
        "height":"90vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }}>
        <h1 className={theme==="light"?Style.text1:Style.text2}>Which Type Information Are You Need?</h1>
    </div>
  )
}

export default Contact