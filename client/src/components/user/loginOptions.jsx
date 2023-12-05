import { Link } from "react-router-dom";

const LoginOptions = () => {
  return (
    <div className="login-options-container">
      <div className="login-route-section">
        <span className="login-route-text">Already a member?</span>
        <Link to="/login" className="login-route-button">
          <span className="login-route-button-description">Log In</span>
        </Link>
      </div>
      <div className="login-route-section">
        <span className="signin-route-text">Don't have an account yet?</span>
        <Link to="/login" className="signin-route-button">
          <span className="signin-route-button-description">Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginOptions;
