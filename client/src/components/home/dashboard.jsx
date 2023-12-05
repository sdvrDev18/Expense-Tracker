import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  return (
    <>
      <div>
        <h3>
          {`Hi ${location.state.data[0].userName}, Welcome to Expense Tracker!!`}
        </h3>
      </div>
    </>
  );
};

export default Dashboard;
