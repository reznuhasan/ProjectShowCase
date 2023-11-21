import React, { useState } from 'react';
import Styles from '../Styles/Register.module.css';
import Styles1 from '../Styles/login.module.css';
import ImportantLabel from './ImportantLabel';
import { Link } from 'react-router-dom';
import { apiURI } from '../utlis/api';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const navigate=useNavigate();
    const [show, setShow] = useState("true");
    const handlePassword = (e) => {
        if (show === true) {
            setShow(false)
        } else {
            setShow(true)
        }
    }
    const handleChanged = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await apiURI.post("/users/login", user);
            if (response.status === 200) {
                const token = response.data.token
                localStorage.setItem('token',token)
                navigate("/doctors")
            }else{
                alert("user login failed")
            }
        } catch (error) {
            alert("user login failed")
        }
    };
    
    return (
        <div className={Styles1.login}>
            <div className={Styles.formContainer}>
                <h1 className={Styles.title}>PATIENT LOGIN</h1>
                <form onSubmit={handleSubmit}>
                    <div className={Styles.inputDiv}>
                        <ImportantLabel name="email" text="EMAIL"></ImportantLabel>
                        <input type="email" name="email" value={user.email} onChange={handleChanged} />
                    </div>
                    <div className={Styles.inputDiv}>
                        <ImportantLabel name="password" text="PASSWORD"></ImportantLabel>
                        <input type={show ? "password" : "text"} name="password" value={user.password} onChange={handleChanged} />
                        <p onClick={handlePassword} className={Styles.checkPassword}>{show ? "show" : "hidden"}</p>
                    </div>
                    <button type="submit" className={Styles.submitBtn}>Submit</button>
                </form>
                <p className={Styles.para}>Don't have an Account?<Link>Create Now</Link></p>
            </div>
        </div>
    );
};

export default Login;
