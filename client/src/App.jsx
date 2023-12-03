import { useState } from "react";
import Login from "./components/user/login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-container">
        <h1 className="main-heading">Expense Tracker</h1>
        <Login />
      </div>
    </>
  );
}

export default App;
