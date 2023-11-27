import React, { useState } from 'react';
import Styles from '../Styles/Register.module.css';
import ImportantLabel from './ImportantLabel';
import { apiURI } from '../utlis/api';
import Styles1 from "../Styles/Appointment.module.css"
import { days, months, years } from '../ConstantData/DatePart';

const Appointment = () => {
    const [patient, setPatient] = useState({
        name: '',
        email: '',
        gender: '',
        age: '',
        mobile: '',
        requestFor: "",
        specialtyConsultation: "",
        doctor: "",
        month: "",
        day: "",
        year: "",
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
                        <input type="radio" name="gender" value="male" checked={patient.gender === 'male'} onChange={handleChanged} />
                        <label>Male</label>
                        <input type="radio" name="gender" value="female" checked={patient.gender === 'female'} onChange={handleChanged} />
                        <label>Female</label>
                        <input type="radio" name="gender" value="other" checked={patient.gender === 'other'} onChange={handleChanged} />
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
                    <div className={Styles.inputDiv} style={{
                        "margin": "6px 0"
                    }}>
                        <ImportantLabel name="requestFor" text="REQUEST FOR"></ImportantLabel>
                        <select name="requestFor" value={patient.requestFor} onChange={handleChanged} className={Styles1.selectInput}>
                            <option value="">Choose One</option>
                            <option value="patientConsultation">Patient Consultation</option>
                            <option value="investigation">Investigation</option>
                            <option value="healthCheck">Health Check Package</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className={Styles.inputDiv} style={{
                        "margin": "6px 0"
                    }}>
                        <ImportantLabel name="specialtyConsultation" text="SPECIALTY FOR CONSULTATION"></ImportantLabel>
                        <select name="specialtyConsultation" value={patient.specialtyConsultation} onChange={handleChanged} className={Styles1.selectInput}>
                            <option value="">Choose One</option>
                            <option value="patientConsultation">Patient Consultation</option>
                            <option value="investigation">Investigation</option>
                            <option value="healthCheck">Health Check Package</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className={Styles.inputDiv} style={{
                        "margin": "6px 0"
                    }}>
                        <ImportantLabel name="doctor" text="DOCTOR"></ImportantLabel>
                        <select name="doctor" value={patient.doctor} onChange={handleChanged} className={Styles1.selectInput}>
                            <option value="">Choose One</option>
                        </select>
                    </div>
                    <div className={Styles1.appoinmentSchedule}>
                        <ImportantLabel name="" text="Preferred Date and Time for Appointment" />
                        <div className={Styles1.datePart}>
                            <select name="month" value={patient.month} onChange={handleChanged} className={Styles1.dateInput}>
                                <option value="">MONTH</option>
                                {
                                    months.map(month => (
                                        <option value={month}>{month}</option>
                                    ))
                                }
                            </select>
                            <select name="day" value={patient.day} onChange={handleChanged} className={Styles1.dateInput}>
                                <option value="">DAY</option>
                                {
                                    days.map(day => (
                                        <option value={day}>{day}</option>
                                    ))
                                }
                            </select>
                            <select name="year" value={patient.year} onChange={handleChanged} className={Styles1.dateInput}>
                                <option value="">YEAR</option>
                                {
                                    years.map(year => (
                                        <option value={year}>{year}</option>
                                    ))
                                }
                            </select>
                        </div>

                    </div>
                    <button type="submit" className={Styles.submitBtn}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Appointment;
