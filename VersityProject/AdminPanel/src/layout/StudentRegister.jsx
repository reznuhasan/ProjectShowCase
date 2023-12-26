import React from 'react'
import PersonalInfo from '../pages/StudentPersonalInfo'
import Styles from "../styles/StudentRegister.module.css";
import { Outlet } from 'react-router-dom';
const StudentRegister = () => {
  return (
    <div className={Styles.studentRegister}>
      <Outlet/>
    </div>
  )
}

export default StudentRegister