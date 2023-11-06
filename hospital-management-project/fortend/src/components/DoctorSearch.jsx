import React, { useState } from 'react'
import Styles from "../Styles/DoctorSearch.module.css"
const DoctorSearch = () => {
   const [doctor, setDoctor] = useState("");
   const [specialty, setSpecialty] = useState("");
   const handleSpecialty = (e) => {
      e.preventDefault();
      console.log(specialty)
      setDoctor("")
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
                  <option value="a">a</option>
                  <option value="b">b</option>
                  <option value="c">c</option>
                  <option value="d">d</option>
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