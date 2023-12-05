import user_icon from "../../assets/icons/user_icon.png";
import LoginOptions from "../user/loginOptions.jsx";

const Home = () => {
  return (
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
      <LoginOptions />
    </div>
  );
};

export default Home;
