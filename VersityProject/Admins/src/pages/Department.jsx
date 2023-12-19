import React, { useState } from 'react'
import ImportLabel from '../components/ImportLabel'

const Department = () => {
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
    const handleSubmit = async () => {
        e.preventDefault()

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <ImportLabel name={"departmentGroupName"} text={"Department Group Name"} />
                    <input type="text" name="departmentGroupName" value={department.departmentGroupName} id="" onChange={handleChange} />
                </div>
                <div>
                    <ImportLabel name={"departmentGroupCode"} text={"Department Name"} />
                    <input type="text" name="departmentGroupCode" value={department.departmentGroupCode} id="" />
                </div>
                <div>
                    <ImportLabel name={"departmentName"} text={"departmen tName "} />
                    <input type="text" name="departmentName" value={department.departmentName} id="" />
                </div>
                <div>
                    <ImportLabel name={"departmentShortName"} text={"departmentShortName "} />
                    <input type="text" name="departmentShortName" value={department.departmentShortName} id="" />
                </div>
                <div>
                    <ImportLabel name={"departmentCode"} text={"departmentCode "} />
                    <input type="text" name="departmentCode" value={department.departmentCode} id="" />
                </div>
               
            </form>
        </div>
    )
}

export default Department