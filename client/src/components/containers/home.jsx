import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <>
      <h3>
        {`Hi ${location.state &&
          location.state.data[0].userName}, Welcome to Expense Tracker!!`}
      </h3>
      <p>this is a simple test tag</p>
    </>
  );
};

export default Home;
