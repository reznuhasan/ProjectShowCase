import React from 'react'
import Styles from "../Styles/Doctor.module.css"
import niger from "../assets/nigerSultana.jpg"
import sabina from "../assets/sabina.jpg"
import jafer from "../assets/jafer.jpg"
const Doctor = () => {
    return (
        <div className={Styles.doctor}>
            <div className={Styles.doctorContentBox}>
                <div>
                    <img src={niger} alt="" />
                </div>
                <div className={Styles.doctorContent}>
                    <div className={Styles.doctorDetails}>
                        <h1>Dr. Nigar Sultana, MBBS, MD (USA)</h1>
                        <h2>Consultant</h2>
                    </div>
                    <div>
                        <h1 style={{"fontSize":"17px","marginBottom":"20px","marginTop":"35px"}}>Department: Psychiatry</h1>
                    </div>
                    <div className={Styles.doctorButton}>
                        <button>Set up an appointment</button>
                        <button style={{
                            "marginLeft":"30px"
                        }}>View Doctor Profile</button>
                    </div>
                </div>
            </div>
            <div className={Styles.doctorContentBox}>
                <div>
                    <img src={sabina} alt="" />
                </div>
                <div className={Styles.doctorContent}>
                    <div className={Styles.doctorDetails}>
                        <h1>Dr. Sabina Sultana , MBBS, DCH, MCPS (Paed.), MD (General Paed.), MD (Paed. Nephrology)</h1>
                        <h2>Coordinator & Senior Consultant</h2>
                    </div>
                    <div>
                        <h1 style={{"fontSize":"15px","marginBottom":"20px","marginTop":"35px"}}>Department: Paediatrics</h1>
                    </div>
                    <div className={Styles.doctorButton}>
                        <button>Set up an appointment</button>
                        <button style={{
                            "marginLeft":"30px"
                        }}>View Doctor Profile</button>
                    </div>
                </div>
            </div>
            <div className={Styles.doctorContentBox}>
                <div>
                    <img src={jafer} alt="" />
                </div>
                <div className={Styles.doctorContent}>
                    <div className={Styles.doctorDetails}>
                        <h1>Dr. Abu Jafar Mohammed Saleh , MBBS, FCPS (Haematology)</h1>
                        <h2>Coordinator & Senior Consultant</h2>
                    </div>
                    <div>
                        <h1 style={{"fontSize":"15px","marginBottom":"20px","marginTop":"35px"}}>Department: Hematology & Stem Cell Transplant</h1>
                    </div>
                    <div className={Styles.doctorButton}>
                        <button>Set up an appointment</button>
                        <button style={{
                            "marginLeft":"30px"
                        }}>View Doctor Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctor