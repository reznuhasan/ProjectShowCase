import React, { useContext, useEffect } from 'react'
import Styles from "../Styles/Doctor.module.css"

import DoctorComp from './DoctorComp'
import { apiURI } from '../utlis/api';
import { doctorData } from '../useHooks/DoctorDataProvider';
const Doctors = () => {
    const {doctors,setDoctors}=useContext(doctorData)
    
    useEffect(()=>{
        const loadDoctor=async()=>{
            const res=await apiURI.get('/doctor/all')
            if(res.status===200){
                setDoctors(res.data.allDoctor)
            }
        }
        loadDoctor();
    },[])
    
    if(doctors.length===0)return <div className={Styles.doctorContentBox}><h1>Loading....</h1></div>
    return (
        <div className={Styles.doctor}>
            {
                doctors.map(doctor=><DoctorComp doctor={doctor} key={doctor._id}/>)
            }
        </div>
    )
}

export default Doctors