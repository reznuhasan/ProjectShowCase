import React, { useEffect, useState } from 'react'
import ImportLabel from '../components/ImportLabel'
import Styles from "../styles/AddSemester.module.css"
import { jwtDecode } from "jwt-decode";
import { apiURL } from '../utlis/apiURL';
import AddNewCourse from '../components/AddNewCourse';

const AddSemester = () => {
    const [number,setNumber]=useState([])
    const [semester, setSemester] = useState({
        departmentName: "",
        departmentCode: "",
        semesterNumber: 0,
        semesterCode: "",
        courseAndTeacherAndClasses: [],
        createdBy: "",
    })
    const handleChange = (e) => {
        setSemester(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    useEffect(() => {
        const loadData = () => {
            const token = localStorage.getItem("token")
            const decodedToken = jwtDecode(token)
            setSemester(prevState => ({
                ...prevState,
                createdBy: decodedToken.userName
            }))
        }
        loadData()
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(semester)
        try {

        } catch (error) {
            alert("something missing")
        }
        
    }
    const handleAddNewCourse = (e) => {
        e.preventDefault()
        console.log("hi")
        setNumber(prevState=>([
            ...prevState,
            (prevState.length===0?1:prevState.length+1)
        ]))
    }
    const handleRemoveCourse=(value)=>{
        console.log(value)
    }
    return (
        <div className={Styles.addSemester}>
            <div className={Styles.title}>
                <h1>Assign a New Department</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={Styles.inputField}>
                    <ImportLabel name={"departmentName"} text={"Department Title"} />
                    <input type="text" name="departmentName" value={semester.departmentName} id="" onChange={handleChange} placeholder='Computer Science...' />
                </div>
                <div className={Styles.inputField}>
                    <ImportLabel name={"departmentCode"} text={"Department Code"} />
                    <input type="text" name="departmentCode" value={semester.departmentCode} onChange={handleChange} id="" placeholder='CS..' />
                </div>
                <div className={Styles.inputField}>
                    <ImportLabel name={"semesterNumber"} text={"Semester Number"} />
                    <input type="text" name="semesterNumber" value={semester.semesterNumber} onChange={handleChange} id="" />
                </div>
                <div className={Styles.inputField}>
                    <ImportLabel name={"semesterCode"} text={"Semester Code"} />
                    <input
                        name="semesterCode"
                        value={semester.semesterCode}
                        onChange={handleChange}
                        placeholder='FALL2023'
                    >
                    </input>
                </div>
                <div className={Styles.totalCourseTitle}>
                    <h1>Added Total Course: {semester.courseAndTeacherAndClasses.length} </h1>
                </div>
                {
                    number.map((num,index) => <AddNewCourse key={num} value={num} handleRemoveCourse={handleRemoveCourse} setSemester={setSemester} />)
                }
                <div className={Styles.addNewCourse}>
                    <button type='button' onClick={handleAddNewCourse}>+ Add A New Course</button>
                </div>
                <div className={Styles.buttonField}>
                    <button type='submit'>Add semester</button>
                </div>
            </form>
        </div>
    )
}

export default AddSemester