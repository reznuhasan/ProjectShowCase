import Styles from "../styles/AdminReg.module.css"
const AdminReg = () => {
  return (
    <div>
      <form>
        
        <div className={Styles.adminReg}>
        <div>
          <h2>Register Admin</h2>
          <label>Full Name</label>
          <input type="text" placeholder="Enter Your Full Name"/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Enter Your Email" />
        </div>

        <div>
          <label>Password</label>
          <input type="password" placeholder="Enter Your Password"/>
        </div>
        
        <div>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Your Password" />
        </div>
        <div>
          <button type="button">Register</button>
        </div>
        </div>


      </form>
    </div>
  )
}

export default AdminReg