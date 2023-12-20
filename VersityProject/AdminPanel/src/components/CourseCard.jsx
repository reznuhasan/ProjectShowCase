import React from 'react'
import Styles from "../styles/CourseCard.module.css"
const CourseCard = ({course}) => {
    const {courseTitle,courseCode,courseCredits,courseOptional}=course
  return (
    <div>
          <div className={Styles.courseCard}>
            <h3 className={Styles.name}>{courseTitle}</h3>
            <p>Course Code:{courseCode}</p>
            <p>Credits:{courseCredits}</p>
            <p>Category:{courseOptional?"Optional":"Non Optional"}</p>
            <button className={Styles.seeMoreButton}>See More</button>
        </div>
    </div>
  )
}

export default CourseCard