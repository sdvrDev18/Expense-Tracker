import { NavLink } from "react-router-dom";

const Sidebar = props => {
  return (
    <div className="grid-sidebar-container">
      <ul>
        <li>
          <NavLink to="/dashboard/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/expense">Expense</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/income">Income</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
