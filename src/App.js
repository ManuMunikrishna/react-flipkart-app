import Home from "./Home/Home";
import LoginPopUp from "./loginPopUp/LoginPopUp";
import MainPage from "./MainPage/MainPage";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Home />} />       
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}
