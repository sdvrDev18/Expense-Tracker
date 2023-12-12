import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../components/user/loginSlice.jsx";

console.log("loginReducer", loginReducer);
export default configureStore({
  reducer: {
    login: loginReducer
  }
});
