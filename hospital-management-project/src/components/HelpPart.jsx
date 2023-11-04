import React from 'react'
import Styles from "../Styles/HelpPart.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'
const HelpPart = () => {
  return (
    <div className={Styles.HelpPart}>
        <h1 className={Styles.title}>How Can We Help?</h1>
        <div className={Styles.menu}>
          <div>
            <h1>Request an Appointment</h1>
            <FontAwesomeIcon icon={faArrowRight} className={Styles.fontIcon} />
          </div>
          <div>
            <h1>Find A Doctor</h1>
            <FontAwesomeIcon icon={faArrowRight} className={Styles.fontIcon} />
          </div>
          <div>
            <h1>Patients & Visitor Guide</h1>
            <FontAwesomeIcon icon={faArrowRight} className={Styles.fontIcon} />
          </div>
          <div>
            <h1>Patient Register</h1>
            <FontAwesomeIcon icon={faArrowRight} className={Styles.fontIcon} />
          </div>
          <div>
            <h1>EverSmile Hotline</h1>
            <FontAwesomeIcon icon={faArrowRight} className={Styles.fontIcon} />
          </div>
        </div>
    </div>
  )
}

export default HelpPart