import React, { useRef, useState } from 'react'
import Styles from "../Styles/UploadReport.module.css"
import { apiURI } from '../utlis/api';
const UploadReport = () => {
    const [profile, setProfile] = useState("");
    const [inputs,setInputs]=useState({
        email:"",
        reports:"",
    })
    const imageRef = useRef(null)
    const handleImageChanged = async (e) => {
        const profile = e.target.files[0];
        const imageFormate = new FormData();
        imageFormate.append("profile", profile);
        try {
            const res = await apiURI.post("http://localhost:8000/api/v1/upload/image/", imageFormate, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            setProfile(res.data.imageUrl)
        } catch (error) {
            console.log()
        }
    }
    const handleImagedClick = () => {
        imageRef.current.click();
    }
    const handleUploadReport=(e)=>{
      e.preventDefault();
      console.log(profile)
    }
    return (
        <div className={Styles.uploadReport}>
            <div className={Styles.uploadBox} onClick={handleImagedClick}>
                {profile ? <img src={profile} /> : <p>Upload Your Report</p>}
                <input ref={imageRef} type="file" name='profile' onChange={handleImageChanged} style={{ display: "none" }} />
            </div>
            <button onClick={handleUploadReport} className={Styles.uploadBtn}>Submit</button>
        </div>
    )
}

export default UploadReport