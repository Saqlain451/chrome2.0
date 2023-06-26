import React, { useEffect } from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useGlobalHook } from "../../Hooks/Context";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";

const Login = () => {
  const { loginData, loginChangeHandler, loginHanlder,isLogin } = useGlobalHook();
  const navigate = useNavigate();
    if(isLogin){
        setTimeout(()=>{
            navigate("/");
        },2500)
    }
  useEffect(()=>{
    if(localStorage.getItem("user")){
       navigate("/"); 
    }
  },[])
  return (
    <>
      <div className="log-in-wrapper">
        <div className="login-card">
          <form autoComplete="off">
            <h1 className="form-title">Log In</h1>
            <div className="input-feild">
              <span className="icon">
                <BsFillPersonFill />
              </span>
              <input
                type="email"
                placeholder="Email id:"
                name="mail"
                value={loginData.mail}
                onChange={loginChangeHandler}
                required
              />
            </div>
            <div className="input-feild">
              <span className="icon">
                <AiFillLock />
              </span>
              <input
                type="password"
                placeholder="Password"
                name="pass"
                value={loginData.pass}
                onChange={loginChangeHandler}
                required
                minLength={8}
              />
            </div>
            <div className="btns">
              <button onClick={loginHanlder}>Login</button>
              <button>
                <NavLink to={"/register"}>Sign Up</NavLink>
              </button>
            </div>
            <button>Forgot Password</button>
          </form>
          <img src="./assets/sign.png" alt="sign" />
        </div>
      </div>
    </>
  );
};

export default Login;
