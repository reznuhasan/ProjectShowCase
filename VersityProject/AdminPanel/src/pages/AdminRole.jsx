import { useEffect, useState } from "react"
import AssignAdmin from "../components/AssignAdmin"
import Styles from "../styles/AdminRole.module.css"
import { apiURL } from "../utlis/apiURL";
import axios from "axios";
import ShowAdmin from "../components/ShowAdmin";
const AdminRole = () => {
  const [allAdmin,setAllAdmin]=useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await apiURL.post(
          "/show-all-admin"
        );
        console.log(res.data.data);
        setAllAdmin(res.data.data);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };
  
    loadData();
  }, []);
  return (
    <div className={Styles.adminRole}>
      <div>
        <h2>Admin Roles</h2>
        <p>
          Empower, Control, and Customize: Unleash the full potential of your admin team with our comprehensive admin roles management system. Tailor access, streamline workflows, and ensure secure governance effortlessly.
        </p>
      </div>
      <div className={Styles.admins}>
        <h2>Admins</h2>
        <div>
          {
           (allAdmin)?
           allAdmin.map(admin=><ShowAdmin key={admin.id} admin={admin}></ShowAdmin>):
           <h1>Loading...</h1>
          }
        </div>
        <div style={{marginTop:"25px"}}>
          <h2>Assign a New Admin</h2>
          <div>
            <AssignAdmin/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminRole