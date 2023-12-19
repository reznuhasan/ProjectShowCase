import { useState } from "react";
import Styles from "../styles/Login.module.css";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { apiURL } from "../utlis/apiURL";
import { useNavigate } from "react-router-dom";

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
  const handleShowPassword = () => {
    if (showPassword === false) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      userId: inputs.email,
      password: inputs.password,
    };
    setInputs({
      email: "",
      password: "",
    });
    try {
      const res = await apiURL.post("/auth/login", user);
      console.log(res.data);
      if (res.status === 200) {
        navigate("/dashboard")
        localStorage.setItem("token",res.data.token);
      }
    } catch (error) {
      console.log(error);
      alert("something wrong");
    }
  };
  return (
    <div className={Styles.loginComponent}>
      <div className={Styles.formPart}>
        <h1 className={Styles.title}>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className={Styles.emailField}>
            <input
              type="text"
              name="email"
              value={inputs.email}
              onChange={handleChanged}
              placeholder="enter email or user id"
            />
          </div>
          <div className={Styles.passwordField}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={inputs.password}
              onChange={handleChanged}
              placeholder="enter password"
            />
            <div className={Styles.fontIcon}>
              {showPassword ? (
                <FaRegEye onClick={handleShowPassword} />
              ) : (
                <FaRegEyeSlash onClick={handleShowPassword} />
              )}
            </div>
          </div>
          <div className={Styles.forgetPassword}>
            <p>Forget Your Password?</p>
          </div>
          <button type="submit" className={Styles.loginBtn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
