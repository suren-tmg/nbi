import React from "react";
import "./style.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Login = () => {
  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-md-6">
          <div className="first-section">
            <div className="login-section p-4 pt-5 pb-5">
              <div className="nbi-logo">
                <img
                  src="./images/nbilogo.png"
                  height={65}
                  width={155}
                  alt=""
                />
              </div>
              <p className="pt-4">Login using your account to quick access</p>
              <div className="login_as_user mb-3">
                <button>LOGIN AS USER</button>
              </div>
              <div className="login-social-icon pt-2 ">
                <li className="licon">
                  <FaFacebookF className="social_icon" />
                </li>
                <li className="licon">
                  <FaTwitter className="social_icon" />
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="second-section">
            <div className="login-form p-4 pt-5 pb-5">
              <form action="">
                <div className="form_lebal">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input type="email" id="email" required />
                </div>
                <br />
                <div className="form_lebal">
                  <label htmlFor="password">Password</label>
                  <br />
                  <input type="password" id="password" required />
                </div>
                <div className="mb-3 mt-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <div className="login_as_user mb-3">
                  <button
                    style={{ backgroundColor: "#fff", color: "rgb(22 98 154)" }}
                  >
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
