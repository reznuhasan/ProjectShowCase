import React, { useState } from 'react';
import Styles from '../Styles/Register.module.css';
import ImportantLabel from './ImportantLabel';
import { apiURI } from '../utlis/api';
import Styles1 from "../Styles/Appointment.module.css"

const Appointment = () => {
    const [patient, setPatient] = useState({
        name: '',
        email: '',
        gender: '',
        age: '',
        mobile:'',
        requestFor:"",
    });
    
    const handleChanged = (e) => {
        setPatient((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(patient);
        
    };

    return (
        <div className={Styles1.appoinment}>
            <div className={Styles.formContainer}>
                <h1 className={Styles.title}>Make Appointment</h1>
                <form onSubmit={handleSubmit}>
                    <div className={Styles.inputDiv}>
                        <ImportantLabel name="name" text="PATIENT'S NAME"></ImportantLabel>
                        <input type="text" name="name" value={patient.name} onChange={handleChanged} />
                    </div>
                    <div className={Styles.inputDiv}>
                        <ImportantLabel name="email" text="EMAIL"></ImportantLabel>
                        <input type="email" name="email" value={patient.email} onChange={handleChanged} />
                    </div>
                    <div className={Styles1.gender}>
                        <label htmlFor='gender'>Gender:</label>
                        <input type="radio" name="gender" value="male" checked={patient.gender==='male'} onChange={handleChanged} />
                        <label>Male</label>
                        <input type="radio" name="gender" value="female" checked={patient.gender==='female'} onChange={handleChanged} />
                        <label>Female</label>
                        <input type="radio" name="gender" value="other" checked={patient.gender==='other'} onChange={handleChanged} />
                        <label>Other</label>
                    </div>
                    <div className={Styles.inputDiv}>
                        <ImportantLabel name="age" text="PATIENT AGE"></ImportantLabel>
                        <input type="text" name="age" value={patient.age} onChange={handleChanged} />
                    </div>
                    <div className={Styles.inputDiv}>
                        <ImportantLabel name="mobile" text="PATIENT MOBILE"></ImportantLabel>
                        <input type="text" name="mobile" value={patient.mobile} onChange={handleChanged} />
                    </div>
                    <div className={Styles.inputDiv}>
                        <ImportantLabel name="requestFor" text="REQUEST FOR"></ImportantLabel>
                        <select name="requestFor"  value={patient.requestFor} onChange={handleChanged}>
                            <option value="">Choose One</option>
                            <option value="patientConsultation">Patient Consultation</option>
                            <option value="investigation">Investigation</option>
                            <option value="healthCheck">Health Check Package</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button type="submit" className={Styles.submitBtn}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Appointment;
