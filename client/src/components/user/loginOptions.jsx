import { NavLink } from "react-router-dom";

const LoginOptions = () => {
  return (
    <div className="login-options-container">
      <div className="login-route-section">
        <span className="login-route-text">Already a member?</span>
        <NavLink
          to="/login"
          className="login-route-button login-route-button-size-large"
        >
          <span className="login-route-button-description">Log In</span>
        </NavLink>
      </div>
      <div className="login-route-section">
        <span className="signin-route-text">Don't have an account yet?</span>
        <NavLink to="/login" className="signin-route-button">
          <span className="signin-route-button-description">Sign Up</span>
        </NavLink>
      </div>
    </div>
  );
};

export default LoginOptions;
