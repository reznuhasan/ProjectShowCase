import React from 'react'
import DoctorSearch from '../components/DoctorSearch'
import Doctor from '../components/Doctor'
import Styles from "../Styles/Doctors.module.css"
const Doctors = () => {
  return (
    <div className={Styles.doctors}>
      <DoctorSearch/>
      <Doctor/>
    </div>
  )
}

export default Doctors