
import Styles from "../styles/AdminRole.module.css"

const ShowAdmin = ({admin}) => {
    const {email,fullName}=admin
    return (
        <div className={Styles.adminInfo}>
            <h3 style={{ width: "30%" }}>Name:{fullName}</h3>
            <h3 style={{ width: "35%" }}>Email:{email}</h3>
            <button className={Styles.btn}>Delete Admin</button>
        </div>
    )
}

export default ShowAdmin