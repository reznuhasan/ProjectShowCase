import { NavLink, useLocation } from "react-router-dom";
import Styles from "../Styles/DashBoardSidebar.module.css";
import { useEffect, useState } from "react";
import { FaHouse, FaUserGraduate, FaUserTie } from "react-icons/fa6";
import { ImUserPlus } from "react-icons/im";
import { FcDepartment } from "react-icons/fc";
import { SiGoogleclassroom } from "react-icons/si";


const DashBoardSidebar = () => {
  const [doctorStyle, setDoctorStyle] = useState("none");
  const [appointmentStyle, setAppointmentStyle] = useState("none");
  const location = useLocation();
  const doctorRoutes = [
    "/dashboard/doctor",
    "/dashboard/add-doctor",
    "/dashboard/add-department",
    "/dashboard/add-certification",
    "/dashboard/add-position",
  ];
  const appointmentRoutes = [
    "/dashboard/appointment",
    "/dashboard/appointment/approved",
    "/dashboard/appointment/pending",
  ];
  useEffect(() => {
    const isDoctorRoute = doctorRoutes.some((route) =>
      location.pathname.startsWith(route)
    );
    setDoctorStyle(isDoctorRoute ? "block" : "none");
    const isAppointmentRoute = appointmentRoutes.some((route) =>
      location.pathname.startsWith(route)
    );
    setAppointmentStyle(isAppointmentRoute ? "block" : "none");
  }, [location.pathname]);
  const handleMouseEnter = () => {
    setDoctorStyle("block");
  };
  const handleMouseLeave = () => {
    if (!doctorRoutes.some((route) => location.pathname.startsWith(route))) {
      setDoctorStyle("none");
    }
  };
  const handleAppointmentMouseEnter = () => {
    setAppointmentStyle("block");
  };
  const handleAppointmentMouseLeave = () => {
    if (
      !appointmentRoutes.some((route) => location.pathname.startsWith(route))
    ) {
      setAppointmentStyle("none");
    }
  };
  return (
    <div className={Styles.dashboardSidebar}>
      <div className={Styles.dashboardNav}>
        <div className={Styles.navMainItem}>
          <FaHouse size={"18px"} color="white" />
          <NavLink to="/dashboard">Dashboard</NavLink>
        </div>
      </div>
      <div
        className={Styles.dashboardNav}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={Styles.navMainItem}>
          <FaUserTie size={"18px"} color="white" />
          <NavLink to="/dashboard">Teachers</NavLink>
        </div>
      </div>
      <div
        className={Styles.dashboardNav}
        onMouseEnter={handleAppointmentMouseEnter}
        onMouseLeave={handleAppointmentMouseLeave}
      >
        <div className={Styles.navMainItem}>
          <FaUserGraduate size={"18px"} color="white" />
          <NavLink to="/dashboard">Students</NavLink>
        </div>
      </div>
      <div className={Styles.dashboardNav}>
        <div className={Styles.navMainItem}>
          <ImUserPlus size={"18px"} color="white" />
          <NavLink to="/dashboard">Staffs</NavLink>
        </div>
      </div>
      <div className={Styles.dashboardNav}>
        <div className={Styles.navMainItem}>
          <FcDepartment size={"18px"} color="white" />
          <NavLink to="/dashboard">Department & Course</NavLink>
        </div>
      </div>
      <div className={Styles.dashboardNav}>
        <div className={Styles.navMainItem}>
          <SiGoogleclassroom size={"18px"} color="white" />
          <NavLink to="/dashboard">Class</NavLink>
        </div>
      </div>
    </div>
  );
};

export default DashBoardSidebar;
