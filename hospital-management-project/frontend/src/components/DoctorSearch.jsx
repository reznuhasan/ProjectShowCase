import React, { useEffect, useState } from 'react'
import Styles from "../Styles/DoctorSearch.module.css"
import { apiURI } from '../utlis/api';
const DoctorSearch = () => {
   const [doctor, setDoctor] = useState("");
   const [specialty, setSpecialty] = useState("");
   const [departmentData,setDepartmentData]=useState([])

   useEffect(()=>{
      const loadDepartment=async()=>{
         const res=await apiURI.get('/doctor/department/')
         if(res.status===200){
            setDepartmentData(res.data.department)
         }
      }
      loadDepartment()
   },[])
   const handleSpecialty = (e) => {
      e.preventDefault();
      
   }
   const hanldeDoctor = (e) => {
      e.preventDefault()
      console.log(doctor)
      setSpecialty("Select Specialty")
   }
   return (
      <div className={Styles.doctorSearch}>
         <div className={Styles.searchBox}>
            <div className={Styles.department}>
               <h2>Department</h2>
               <select name="department" onChange={(e) => setSpecialty(e.target.value)} id="">
                  <option value="">Select Specialty</option>
                  {
                     
                     departmentData && departmentData.map(element=>(
                        <option value={element.name}>{element.name}</option>
                     ))
                  }
               </select>
               <button onClick={handleSpecialty}>Request</button>
            </div>
            <div className={Styles.department}>
               <h2>Doctor</h2>
               <input type="text" name='doctor' value={doctor} onChange={(e) => setDoctor(e.target.value)} placeholder='Search Doctor....' />
               <button onClick={hanldeDoctor}>Search</button>
            </div>

         </div>
      </div>
   )
}

export default DoctorSearch