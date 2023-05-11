// import { useState } from "react";
import "./LoginPopUp.css";

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
              <button className="login-Btn">Request OTP</button>
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
