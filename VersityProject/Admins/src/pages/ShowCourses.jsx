import React, { useEffect, useState } from 'react'
import { apiURL } from '../utlis/apiURL'
import Styles from "../styles/ShowCourses.module.css"
import DepartmentCard from '../components/DepartmentCard'
import CourseCard from '../components/CourseCard'

const ShowCourses = () => {
    const [allCourses, setallCourses] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const res = await apiURL.get('/course/get-all')
            setallCourses(res.data.data)
            console.log(res.data.data)
        }
        loadData()
    }, [])
    return (
        <div className={Styles.showCourses}>
            <div className={Styles.titleBox}>
                <h1>Courses</h1>
            </div>
            <div>
                <div className={Styles.search}>
                    <input type="text" placeholder="Search Courses..." />
                </div>
            </div>
            <div className={Styles.availableTitle}>
              <h1>Available Course</h1>  
            </div>
            <div className={Styles.courseCardsContainer}>
                {
                    (allCourses) &&
                    allCourses.map(course => <CourseCard key={course.id} course={course} />)
                }
            </div>
        </div>
    )
}

export default ShowCourses