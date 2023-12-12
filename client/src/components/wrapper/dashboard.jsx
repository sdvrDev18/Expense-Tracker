import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar.jsx";

const Dashboard = () => {
  return (
    <>
      <div className="grid-col-app-wrapper">
        <Sidebar />
        <div className="grid-content-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
