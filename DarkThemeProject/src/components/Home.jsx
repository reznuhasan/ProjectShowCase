import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import Style from '../Styles/Home.module.css'
const Home = () => {
    const {theme}=useContext(ThemeContext)
  return (
    <div style={{
        "height":"90vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }}>
        <h1  className={theme==="light"?Style.text1:Style.text2}>This is my Home Page</h1>
    </div>
  )
}

export default Home