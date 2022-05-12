import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About/About";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Login from "./Pages/Login/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
