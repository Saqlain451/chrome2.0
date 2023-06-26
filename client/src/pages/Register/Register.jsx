import React from "react";
import "./register.css";
import { AiFillLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineLockPerson, MdEmail } from "react-icons/md";
import { useGlobalHook } from "../../Hooks/Context";
import {useNavigate} from 'react-router-dom'
const Register = () => {
    const navigate = useNavigate()
  const { registerData, regChangeHanler, regSubHandler } = useGlobalHook();
  return (
    <>
      <div className="register-wrapper">
        <div className="signup-card">
          <img src="./assets/register.png" alt="sign" />
          <form>
            <h1 className="form-title">Sign Up</h1>
            <div className="input-feild">
              <span className="icon">
                <BsFillPersonFill />
              </span>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={registerData.name}
                onChange={regChangeHanler}
              />
            </div>
            <div className="input-feild">
              <span className="icon">
                <MdEmail />
              </span>
              <input
                type="email"
                placeholder="Email id:"
                name="mail"
                value={registerData.mail}
                onChange={regChangeHanler}
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
                value={registerData.pass}
                onChange={regChangeHanler}
                required
                minLength={8}
              />
            </div>
            <div className="input-feild">
              <span className="icon">
                <MdOutlineLockPerson />
              </span>
              <input
                type="password"
                placeholder="Confirm Password"
                name="cpass"
                value={registerData.cpass}
                onChange={regChangeHanler}
              />
            </div>
            <div className="btns">
              <button onClick={regSubHandler}>Sign Up</button>
              <button
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
