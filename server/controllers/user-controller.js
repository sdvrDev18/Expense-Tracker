import { User } from "../models/user-model.js";

export const getUserDetails = async (req, res, next) => {
  const user = req.params.username;
  const password = req.params.password;
  console.log("user", user);
  let result;
  try {
    result = await User.find({ userName: user, password: password });
    console.log("Get request success!!");
    if (result.length === 0)
      return res
        .status(400)
        .json({ message: "No Data to display", status: false, data: result });
  } catch (error) {
    console.log("Get request failed!!");
    res
      .status(404)
      .json({ message: "Get request failed!!", status: false, error: error });
    // return next(error);
  }
  res
    .status(200)
    .json({ message: "Get request success!!", status: true, data: result });
};

export const postUserDetails = async (req, res, next) => {
  const userData = new User({
    userName: req.body.userName,
    age: req.body.age,
    country: req.body.country,
    state: req.body.state
  });
  let result;
  try {
    result = await userData.save();
  } catch (error) {
    console.log("catch block");
    return res.status(500).json({ message: error });
  }

  res.status(200).json({ message: "Data added to DB", result });
};
