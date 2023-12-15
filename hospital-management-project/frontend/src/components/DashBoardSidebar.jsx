import { NavLink, useLocation } from "react-router-dom";
import Styles from "../Styles/DashBoardSidebar.module.css";
import { useEffect, useState } from "react";
const DashBoardSidebar = () => {
  const [doctorStyle, setDoctorStyle] = useState("none");
  const location=useLocation();
  const doctorRoutes = [
   "/dashboard/doctor",
   "/dashboard/add-doctor",
   "/dashboard/add-department",
   "/dashboard/add-certification",
   "/dashboard/add-position",
 ];
  useEffect(()=>{
   const isRoute=doctorRoutes.some(route=>location.pathname.startsWith(route))
   console.log(isRoute)
   setDoctorStyle(isRoute?"block":"none")
},[location.pathname])
  const handleMouseEnter = () => {
    setDoctorStyle("block");
  };
  const handleMouseLeave = () => {
   if (!doctorRoutes.some(route => location.pathname.startsWith(route))) {
      setDoctorStyle("none");
    }
     };
  return (
    <div className={Styles.dashboardSidebar}>
      <div className={Styles.dashboardNav}>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
      <div className={Styles.dashboardNav}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      >
        <div >
          <NavLink>Doctor</NavLink>
        </div>
        <div
          className={Styles.doctorDropdownMenu}
          style={{ display: doctorStyle }}
        >
          <div className={Styles.doctorDropdownMenuNav}>
            <div className={Styles.doctorDropdownCircle}></div>

            <NavLink to="/dashboard/add-doctor">Add Doctor</NavLink>
          </div>
          <div className={Styles.doctorDropdownMenuNav}>
            <div className={Styles.doctorDropdownCircle}></div>

            <NavLink to="/dashboard/add-department">Add Department</NavLink>
          </div>
          <div className={Styles.doctorDropdownMenuNav}>
            <div className={Styles.doctorDropdownCircle}></div>

            <NavLink to="/dashboard/add-certification">
              Add Certification
            </NavLink>
          </div>
          <div className={Styles.doctorDropdownMenuNav}>
            <div className={Styles.doctorDropdownCircle}></div>

            <NavLink to="/dashboard/add-position">Add Position</NavLink>
          </div>
        </div>
      </div>
      <div className={Styles.dashboardNav}>
        <NavLink to="/dashboard/appointment">Appointment</NavLink>
      </div>
      <div className={Styles.dashboardNav}>
        <NavLink to="/dashboard/appointment">Users</NavLink>
      </div>
    </div>
  );
};

export default DashBoardSidebar;
