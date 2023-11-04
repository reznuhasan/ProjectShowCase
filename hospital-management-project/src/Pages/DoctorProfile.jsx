import React from 'react'
import Styles from "../Styles/DoctorProfile.module.css"
import jafer from "../assets/jafer.jpg"
const DoctorProfile = () => {
    return (
        <div className={Styles.DoctorProfile}>
            <div className={Styles.doctorProfileBox}>
                <div>
                    <img src={jafer} alt="" />
                </div>
                <div className={Styles.doctorContent}>
                    <div className={Styles.doctorDetails}>
                        <h1>Dr. Abu Jafar Mohammed Saleh , MBBS, FCPS (Haematology)</h1>
                        <h2>Coordinator & Senior Consultant</h2>
                    </div>
                    <div>
                        <h1 style={{ "fontSize": "15px", "marginBottom": "20px", "marginTop": "35px" }}>Department: Hematology & Stem Cell Transplant</h1>
                    </div>
                    <div className={Styles.doctorButton}>
                        <button>Set up an appointment</button>
                    </div>
                </div>
            </div>
            <div className={Styles.profileContent}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam corporis aperiam ex, nulla fuga accusamus alias ad repellat provident ducimus rerum facilis velit, praesentium sequi consequuntur libero minus exercitationem voluptate nesciunt nemo ipsam delectus ullam repellendus saepe! Nihil dignissimos beatae iste nemo ducimus quidem in cupiditate dolor, excepturi sequi facilis molestias. Obcaecati repellendus quod, minus dicta quis delectus facere? Architecto ipsam amet reprehenderit suscipit nobis at neque consequuntur dolore quae nostrum tempore odit aliquid eius officia, unde eum quam veritatis assumenda quidem deleniti. Consequuntur earum totam iste sunt magnam. Aspernatur excepturi eligendi laudantium ut corporis, reprehenderit veritatis quis consequatur reiciendis.</p>
            </div>
        </div>
    )
}

export default DoctorProfile