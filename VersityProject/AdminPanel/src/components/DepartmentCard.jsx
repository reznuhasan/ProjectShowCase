import React from 'react'
import Styles from "../styles/DepartmentCard.module.css"
const DepartmentCard = ({department}) => {
    const {departmentName,departmentShortName,departmentGroupName,departmentCode}=department
  return (
    <div>
          <div className={Styles.departmentCard}>
            <h3 className={Styles.name}>{departmentName}</h3>
            <p>Short Name:{departmentShortName}</p>
            <p>Code:{departmentCode}</p>
            <p><strong className={Styles.groupName}>Group Name:</strong>{departmentGroupName}</p>
            <button className={Styles.seeMoreButton}>See More</button>
        </div>
    </div>
  )
}

export default DepartmentCard