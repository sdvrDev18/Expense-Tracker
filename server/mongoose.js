import mongoose from "mongoose";

import { User } from "./models/user-model.js";

const url =
  "mongodb+srv://Sachdev:Thegodfather%400@cluster0.elpqkkf.mongodb.net/Expense-Tracker?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("Succesfully connected to DB");
  })
  .catch(() => {
    console.log("Failed Connecting to DB");
  });

export const postUserDetails = async (req, res, next) => {
  const userData = new User({
    userName: req.body.userName,
    age: req.body.age,
    country: req.body.country,
    state: req.body.state
  });

  // const result = await userData.save();
  let result;
  try {
    result = await userData.save();
  } catch (error) {
    console.log("catch block");
    return res.status(500).json({ message: error });
  }

  res.status(200).json({ message: "Data added to DB", result });
};
