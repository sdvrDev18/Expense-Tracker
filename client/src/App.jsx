import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Login from "./components/user/login.jsx";
import LoginOptions from "./components/user/loginOptions.jsx";
import Header from "./components/wrapper/header.jsx";
import Dashboard from "./components/wrapper/dashboard.jsx";
import Home from "./components/home/home.jsx";
import Expense from "./components/expense/expense.jsx";
import Income from "./components/income/income.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<LoginOptions />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<Header />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="/dashboard/expense" element={<Expense />} />
            <Route path="/dashboard/income" element={<Income />} />
          </Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
