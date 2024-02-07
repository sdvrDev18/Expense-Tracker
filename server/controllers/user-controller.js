import { User } from "../models/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUserDetails = async (req, res) => {
  const user = req.params.username;
  const password = req.params.password;
  try {
    const result = await User.findOne({ userName: user });
    console.log("Get request success!!");
    if (!result) {
      return res.status(404).json({ message: "User does not exist. " });
      // res.status doesnt take the execution out of the function.
      //It only send the status and other stuff.
      //Hence use return if you want to stop execution after a particular step.
    }
    const isMatch = await bcrypt.compare(password, result.password);
    if (!isMatch) {
      return res.status(404).json({ message: "Incorrect Password. " });
    }

    const jwtToken = jwt.sign(
      { userID: result._id },
      process.env.JWT_SECRET_TOKEN,
      { expiresIn: "10m" }
    );

    res.status(200).json({ jwtToken: jwtToken, data: result });
    // Here return is not needed as the function is over anyway after this line.
  } catch (error) {
    console.log("Get request failed!!");
    res
      .status(500)
      .json({ message: "Get request failed!!", status: false, error: error });
  }
};

export const postUserDetails = async (req, res, next) => {
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(req.body.password, salt);
  const userData = new User({
    userName: req.body.userName,
    country: req.body.country,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: passwordHash,
    expenseCategory: req.body.expenseCategory,
    loginStatus: true
  });
  try {
    const result = await userData.save();
    res.status(200).json({ message: "Data added to DB", result });
  } catch (error) {
    console.log("catch block");
    res.status(500).json({ message: error });
  }
};
