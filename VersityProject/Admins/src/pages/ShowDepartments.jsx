import React, { useEffect, useState } from 'react'
import { apiURL } from '../utlis/apiURL'
import Styles from "../styles/ShowDepartments.module.css"
import DepartmentCard from '../components/DepartmentCard'

const ShowDepartments = () => {
    const [allDepartment, setAllDepartment] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const res = await apiURL.get('/department/find-all-department')
            setAllDepartment(res.data.data)
            console.log(res.data.data)
        }
        loadData()
    }, [])
    return (
        <div className={Styles.showDepartments}>
            <div className={Styles.titleBox}>
                <h1>Departments</h1>
            </div>
            <div>
                <div className={Styles.search}>
                    <input type="text" placeholder="Search Department..." />
                </div>
            </div>
            <div className={Styles.availableTitle}>
              <h1>Available Departments</h1>  
            </div>
            <div className={Styles.departmentCardsContainer}>
                {
                    (allDepartment) &&
                    allDepartment.map(department => <DepartmentCard key={department.id} department={department} />)
                }
            </div>
        </div>
    )
}

export default ShowDepartments