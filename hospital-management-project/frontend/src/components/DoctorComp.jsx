import React from 'react'
import Styles from "../Styles/Doctor.module.css"
import { Link } from 'react-router-dom'
const DoctorComp = ({doctor}) => {
    const {certification,department,name,profile,position}=doctor
    return (
        <div className={Styles.doctorContentBox}>
            <div>
                <img src={profile} alt="" />
            </div>
            <div className={Styles.doctorContent}>
                <div className={Styles.doctorDetails}>
                    <h1>{name}</h1>
                    <p>{certification[0]},{certification[1]},{certification[3]}</p>
                    <h2>{position}</h2>
                </div>
                <div>
                    <h1 style={{ "fontSize": "17px", "marginBottom": "20px", "marginTop": "35px" }}>Department: {department}</h1>
                </div>
                <div className={Styles.doctorButton}>
                    <Link to="/appointment"><button>Set up an appointment</button></Link>
                    <button style={{
                        "marginLeft": "30px"
                    }}>View Doctor Profile</button>
                </div>
            </div>
        </div>
    )
}

export default DoctorComp