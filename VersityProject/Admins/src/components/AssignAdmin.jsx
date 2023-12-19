import React, { useState } from 'react'
import Styles from "../styles/AssignAdmin.module.css"
import ImportLabel from './ImportLabel'
import { apiURL } from '../utlis/apiURL'
const AssignAdmin = () => {
  const [admin, setAdmin] = useState({
    fullName: "",
    email: "",
    password: "",
  })
  const handleChanged = (e) => {
    setAdmin(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const handleSumbit =async(e) => {
    e.preventDefault()
    try {
      console.log(admin)
      const res=await apiURL.post("/admin/register",admin)
      console.log(res.data)
    } catch (error) {
      console.log(error)
      alert("Something Missing")
    }
  }
  return (
    <div className={Styles.AssignAdmin}>
      <form onSubmit={handleSumbit}>
        <div className={Styles.inputField}>
          <ImportLabel name={"fullName"} text={"Full Name"}></ImportLabel>
          <input type="text" name="fullName" value={admin.fullName} onChange={handleChanged} placeholder='enter admin full name' />
        </div>

        <div className={Styles.inputField}>
        <ImportLabel name={"email"} text={"Email Adress"}></ImportLabel>
          <input type="email" name="email" value={admin.email} onChange={handleChanged} placeholder='enter admin email' />
        </div>
        <div className={Styles.inputField}>
        <ImportLabel name={"password"} text={"Password"}></ImportLabel>
          <input type="password" name="password" value={admin.password} onChange={handleChanged} placeholder='enter admin password' />
        </div>
        <div>
          <button type='submit' className={Styles.adminAddButton}>Add Admin</button>
        </div>

      </form>
    </div>
  )
}

export default AssignAdmin