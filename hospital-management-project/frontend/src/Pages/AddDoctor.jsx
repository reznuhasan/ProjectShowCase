import React, { useState } from 'react'
import ImportantLabel from '../components/ImportantLabel'
import Styles from "../Styles/AddDoctor.module.css"
import Multiselect from 'multiselect-react-dropdown'
const AddDoctor = () => {
  const data = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5'
  ]
  const [doctor, setDoctor] = useState({
    name: '',
    email: '',
    department: "",
  });
  const [certification, setCertification] = useState([])
  const handleChanged = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleCertification = (e) => {
    setCertification(e)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(certification);
  };
  return (
    <div className={Styles.addDoctor}>
      <div className={Styles.formContainer}>
        <h1 className={Styles.title}>Add Doctors</h1>
        <form onSubmit={handleSubmit}>
          <div className={Styles.inputDiv}>
            <ImportantLabel name="name" text="Doctor Name"></ImportantLabel>
            <input type="text" name="name" value={doctor.name} onChange={handleChanged} />
          </div>
          <div className={Styles.inputDiv}>
            <ImportantLabel name="email" text="Doctor Email"></ImportantLabel>
            <input type="email" name="email" value={doctor.email} onChange={handleChanged} />
          </div>
          <div className={Styles.inputDiv} style={{
            "margin": "6px 0"
          }}>
            <ImportantLabel name="department" text="Department"></ImportantLabel>
            <select name="department" value={doctor.requestFor} onChange={handleChanged} className={Styles.selectInput}>
              <option value="">Choose One</option>
            </select>
          </div>
          <div className={Styles.inputDiv} style={{
            "margin": "6px 0"
          }}>
            <ImportantLabel name="certification" text="Certification"></ImportantLabel>
            <Multiselect options={data} isObject={false} onRemove={handleCertification} onSelect={handleCertification}/>
          </div>
          <button type="submit" className={Styles.submitBtn}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddDoctor