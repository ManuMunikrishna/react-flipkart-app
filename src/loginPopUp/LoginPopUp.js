// import { useState } from "react";
import "./LoginPopUp.css";
import { Link } from "react-router-dom";

export default function LoginPopUp(props, setshowLoginPopUp, closePopUp) {
  return props.trigger ? (
    <div>
      <div className="main">
        <div className="popUp">
          <div className="popUpHeader">
            <div className="sidebar">
              <h1 className="Login-title">Login</h1>
              <h3 className="txt-body">
                Get access to your orders, Wishlist and Recommendations
              </h3>
            </div>
            <div className="login-cred">
              <input
                className="input-txt"
                placeHolder="Enter Email/Mobile Number"
                required
              />
              <p className="txt-1">
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </p>
              <Link to="/home"  className="login-Btn">Request OTP</Link>
            </div>
            <button
              onClick={() => props.setTrigger(false)}
              className="close-btn"
            >
              X
            </button>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
