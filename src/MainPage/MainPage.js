import "./mainpage.css";
import { useState } from "react";
import LoginPopUp from "../loginPopUp/LoginPopUp";

export default function MainPage() {
  const [showLoginPopUp, setshowLoginPopUp] = useState(false);

  const closePopUp = () => {
    setshowLoginPopUp(false);
  };

  return (
    <div className="homeBtn">
      <button onClick={() => setshowLoginPopUp(true)} className="kartLink">
        Flipkart
      </button>
      <LoginPopUp trigger={showLoginPopUp} setTrigger={setshowLoginPopUp}>
        <LoginPopUp />
      </LoginPopUp>
      {/* {showLoginPopUp && <LoginPopUp />} */}
    </div>
  );
}
