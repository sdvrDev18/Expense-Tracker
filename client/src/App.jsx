import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/user/login.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";
import LoginOptions from "./components/user/loginOptions.jsx";
import user_icon from "./assets/icons/user_icon.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="main-container">
        <header className="header-main-container">
          <div className="header-main-filler-section"></div>
          <h1 className="header-main-caption">EXPENSE TRACKER</h1>
          <img
            className="header-main-icon"
            src={user_icon}
            alt="user"
            height="50"
            width="50"
          />
        </header>
        <Routes>
          <Route path="/" element={<LoginOptions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
