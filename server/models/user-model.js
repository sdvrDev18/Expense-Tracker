import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    firstName: { type: String, min: 2, max: 50, required: true },
    lastName: { type: String, min: 2, max: 50, required: true },
    email: { type: String, required: true, max: 100, unique: true },
    password: { type: String, min: 5, required: true },
    country: { type: String, required: true },
    expenseCategory: { type: Array, default: [] },
    loginStatus: { type: Boolean }
  },
  { timestamps: true }
);

//first parameter of model "users" should be small letter and plural,
//else mongoDb will convert it to that
export const User = mongoose.model("users", userSchema);
