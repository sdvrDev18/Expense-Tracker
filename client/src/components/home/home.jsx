import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector(state => state.login.value);
  const location = useLocation();
  console.log("USER REDUCER", user);
  return (
    <>
      <h3>{`Hi ${
        Object.keys(user).length !== 0 ? user[0].userName : "NOT LOGGED IN"
      }, Welcome to Expense Tracker!!`}</h3>
      <p>this is a simple test tag</p>
    </>
  );
};

export default Home;
