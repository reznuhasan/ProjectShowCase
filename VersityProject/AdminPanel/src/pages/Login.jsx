import { useState } from "react";
import Styles from "../styles/Login.module.css";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChanged = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleShowPassword=()=>{
    if(showPassword===false){
      setShowPassword(true)
    }else{
      setShowPassword(false)
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs)
  }
  return (
    <div className={Styles.loginComponent}>
      <div className={Styles.formPart}>
        <h1 className={Styles.title}>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className={Styles.emailField}>
            <input
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChanged}
              placeholder="enter your email"
            />
          </div>
          <div className={Styles.passwordField}>
            <input
              type={showPassword?"text":"password"}
              name="password"
              value={inputs.password}
              onChange={handleChanged}
              placeholder="enter your password"
            />
            <div className={Styles.fontIcon}>
              {showPassword ? <FaRegEye onClick={handleShowPassword}/> : <FaRegEyeSlash onClick={handleShowPassword}/>}
            </div>
          </div>
          <div className={Styles.forgetPassword}>
            <p>Forget Your Password?</p>
          </div>
          <button type="submit" className={Styles.loginBtn}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
