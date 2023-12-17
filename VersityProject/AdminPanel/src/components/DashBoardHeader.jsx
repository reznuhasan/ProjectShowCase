import Styles from "../Styles/DashBoardHeader.module.css";
import { FaAlignJustify, FaBell, FaEnvelope } from "react-icons/fa6";
import defaultImage from "../assets/defaultImage.png";
import { NavLink, useNavigate } from "react-router-dom";

const DashBoardHeader = () => {
  const navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem("token")
        navigate("/")
    }
  return (
    <div className={Styles.dashboardHeader}>
      <div className={Styles.cmsLogo}>
        <h3>Admin Panel</h3>
        <FaAlignJustify />
      </div>

      <div>
        <div className={Styles.search}>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className={Styles.adminProfile}>
        <div className={Styles.fontIcon}>
          <FaEnvelope size={22} className={Styles.icon} />
        </div>
        <div className={Styles.fontIcon}>
          <FaBell size={22} className={Styles.icon} />
        </div>
        <div className={Styles.userAdminProfile}>
          <div className={Styles.profileCircle}>
            <img src={defaultImage} alt="" />
          </div>
          <div className={Styles.dropdownMenu}>
            <NavLink>Change Profile</NavLink>
            <button className={Styles.logout} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
