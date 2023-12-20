import React, { useEffect, useState } from 'react'
import ImportLabel from '../components/ImportLabel'
import Styles from "../styles/AddCourse.module.css"
import { jwtDecode } from "jwt-decode";
import { apiURL } from '../utlis/apiURL';

const AddCourse = () => {
    const [course, setCourse] = useState({
        courseTitle: "",
        courseCode: "",
        courseCredits: "",
        courseOptional:false,
        createdBy: "",
    })
    const handleChange = (e) => {
        setCourse(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    useEffect(()=>{
        const loadData=()=>{
            const token = localStorage.getItem("token")
            const decodedToken = jwtDecode(token)
            setCourse(prevState => ({
                ...prevState,
                createdBy: decodedToken.userName
            }))
        }
        loadData()
    },[])
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await apiURL.post("/course/register", course)
            console.log(res.data)
            if (res.status === 200) {
                alert("Course Add Successfully")
            }
        } catch (error) {
            alert("something missing")
        }
        setCourse({
            courseTitle: "",
            courseCode: "",
            courseCredits: "",
            courseOptional: false,
            createdBy: "",
        })
    }
    return (
        <div className={Styles.addCourse}>
            <div className={Styles.title}>
                <h1>Assign a New Department</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={Styles.inputField}>
                    <ImportLabel name={"courseTitle"} text={"Course Title"} />
                    <input type="text" name="courseTitle" value={course.courseTitle} id="" onChange={handleChange} placeholder='Advanced Physics...' />
                </div>
                <div className={Styles.inputField}>
                    <ImportLabel name={"courseCode"} text={"Course Code"} />
                    <input type="text" name="courseCode" value={course.courseCode} onChange={handleChange} id="" placeholder='PHY202..' />
                </div>
                <div className={Styles.inputField}>
                    <ImportLabel name={"courseCredits"} text={"Course Credits "} />
                    <input type="text" name="courseCredits" value={course.courseCredits} onChange={handleChange} id="" placeholder='4' />
                </div>
                <div className={Styles.inputField}>
                    <ImportLabel name={"courseOptional"} text={"Course Optional"} />
                    <select
                        name="courseOptional"
                        value={course.courseOptional}
                        onChange={handleChange}
                        className={Styles.selectInput}
                    >
                        <option value={false}>Not Optional</option>
                        <option value={true}>Optional</option>
                    </select>
                </div>
                <div className={Styles.buttonField}>
                    <button type='submit'>Add Course</button>
                </div>
            </form>
        </div>
    )
}

export default AddCourse