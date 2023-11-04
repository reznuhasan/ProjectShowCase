import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import BorderBox from '../components/BorderBox'
import Footer from '../components/Footer'

const Root = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <BorderBox/>
        <Footer/>
    </div>
  )
}

export default Root