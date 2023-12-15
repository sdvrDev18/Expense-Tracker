import { useState } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { userdata } from "./loginSlice.jsx";

const Login = () => {
  const user = useSelector(state => state.login.value);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const [userName, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const horizontal = "right";
  const vertical = "top";
  const getUserByName = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/user/${userName}/${userPassword}`,
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          redirect: "follow",
          referrerPolicy: "no-referrer"
        }
      );

      const data = await response.json();
      if (data.status) {
        data && dispatch(userdata(data.data));
        navigateTo("/dashboard/home", { state: { data: data && data.data } });
      } else {
        setLoginStatus("error");
      }
      console.log("data", data);
    } catch (err) {
      setLoginStatus("error");
      console.log("Error fetching data", err);
    }
  };

  return (
    <>
      <div className="login-container">
        <h2>Login to Expense Tracker</h2>
        <div className="login-input-container">
          <label>Username:</label>
          <input type="text" onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="login-input-container">
          <label>Password:</label>
          <input
            type="password"
            onChange={e => setUserPassword(e.target.value)}
          />
        </div>
        <div className="login-button-container">
          <Link
            onClick={getUserByName}
            className="login-route-button login-route-button-size-small"
          >
            <span className="login-route-button-description">Login</span>
          </Link>
          <Link to="/" className="cancel-button">
            <span className="cancel-button-description">Cancel</span>
          </Link>
        </div>
      </div>
      <Snackbar
        open={loginStatus === "success" || loginStatus === "error"}
        autoHideDuration={2000}
        onClose={() => setLoginStatus("")}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert
          onClose={() => setLoginStatus("")}
          severity={loginStatus === "success" ? "success" : "error"}
          variant="filled"
        >
          {loginStatus === "success"
            ? "User login Successfull!!"
            : "Login Failed!!!"}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Login;
