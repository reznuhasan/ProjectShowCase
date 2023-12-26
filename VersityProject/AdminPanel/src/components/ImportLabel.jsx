import React from 'react'
import Styles from "../styles/ImportLabel.module.css"
const ImportLabel = ({name,text,important}) => {
  return (
    <div className={Styles.impLabel}>
      <label htmlFor={name}>{text}: {(important)&&<span className={Styles.star}>*</span>}</label>
    </div>
  )
}

export default ImportLabel

