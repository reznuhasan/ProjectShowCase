import { NavLink } from "react-router-dom"
import Styles from "../Styles/DashBoardSidebar.module.css"
const DashBoardSidebar = () => {
  return (
    <div className={Styles.dashboardSidebar}>
        <div className={Styles.dashboardNav}>
           <NavLink to="/dashboard">Dashboard</NavLink>
        </div>
        <div className={Styles.dashboardNav}>
           <NavLink to="/dashboard/doctor">Doctor</NavLink>
        </div>
        <div className={Styles.dashboardNav}>
           <NavLink to="/dashboard/appointment">Appointment</NavLink>
        </div>
    </div>
  )
}

export default DashBoardSidebar