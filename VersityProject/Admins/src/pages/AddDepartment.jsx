import React, { useState } from 'react'
import ImportLabel from '../components/ImportLabel'
import Styles from "../styles/AddDepartment.module.css"
import { jwtDecode } from "jwt-decode";
import { apiURL } from '../utlis/apiURL';

const AddDepartment = () => {
    const [department, setDepartment] = useState({
        departmentGroupName: "",
        departmentGroupCode: "",
        departmentName: "",
        departmentShortName: "",
        departmentCode: "",
        createdBy: "",
    })
    const handleChange = (e) => {
        setDepartment(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem("token")
        const decodedToken = jwtDecode(token)
        console.log(decodedToken)
        setDepartment(prevState => ({
            ...prevState,
            createdBy: decodedToken.userName
        }))
        try {
            const res = await apiURL.post("/department/register", department)
            if (res.status === 201) {
                alert("Department Add Successfully")
            }
        } catch (error) {
            alert("something missing")
        }
        setDepartment({
            departmentGroupName: "",
            departmentGroupCode: "",
            departmentName: "",
            departmentShortName: "",
            departmentCode: "",
            createdBy: "",
        })
    }
    return (
        <div className={Styles.addDepartment}>
            <div className={Styles.title}>
                <h1>Assign a New Department</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={Styles.inputField}>
                    <ImportLabel name={"departmentGroupName"} text={"Department Group Name"} />
                    <input type="text" name="departmentGroupName" value={department.departmentGroupName} id="" onChange={handleChange} placeholder='FACULTY OF DESIGN & TECHNOLOGY...' />
                </div>
                <div className={Styles.inputField}>
                    <ImportLabel name={"departmentGroupCode"} text={"Department Group Code"} />
                    <input type="text" name="departmentGroupCode" value={department.departmentGroupCode} onChange={handleChange} id="" placeholder='UFDT or PFDT' />
                </div>
                <div className={Styles.inputField}>
                    <ImportLabel name={"departmentName"} text={"Department Name "} />
                    <input type="text" name="departmentName" value={department.departmentName} onChange={handleChange} id="" placeholder='Fashion Design & Technology...' />
                </div>
                <div className={Styles.inputField}>
                    <ImportLabel name={"departmentShortName"} text={"Department Short Name "} />
                    <input type="text" name="departmentShortName" onChange={handleChange} value={department.departmentShortName} id="" placeholder='FDT' />
                </div>
                <div className={Styles.inputField}>
                    <ImportLabel name={"departmentCode"} text={"Department Code "} />
                    <input type="text" name="departmentCode" value={department.departmentCode} onChange={handleChange} id="" placeholder='101' />
                </div>
                <div className={Styles.buttonField}>
                    <button type='submit'>Add Department</button>
                </div>
            </form>
        </div>
    )
}

export default AddDepartment