import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About/About";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Login from "./Pages/Login/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import SignUp from "./Pages/Login/Login/SignUp";
import RequireAuth from "./Pages/Login/Login/RequireAuth";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
      </Routes>
    </div>
  );
}

export default App;
