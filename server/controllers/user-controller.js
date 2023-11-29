import { userData } from "../data/user-data.js";
// import { connection } from "../mongo.js";

import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

const url =
  "mongodb+srv://Sachdev:Thegodfather%400@cluster0.elpqkkf.mongodb.net/Expense-Tracker?retryWrites=true&w=majority";

const connection = new MongoClient(url);

export const getUserDetails = (req, res, next) => {
  const selectedUserAge = userData.find(
    data => data.userName === req.params.user
  );
  // console.log("RESPONSE", selectedUserAge);
  const error = new Error();
  error.code = 400;
  if (!selectedUserAge) return next({ error });
  res.status(200).json({
    name: selectedUserAge.userName,
    age: selectedUserAge.age
  });

  //throw new Error("handled in a way!!")
  //throw res.status(525).send("Error occured and handled!");
};

export const addUserDetails = async (req, res, next) => {
  const reqData = req.body;
  console.log("hits controller");
  try {
    await connection.connect();
    console.log("DB CONNECTION SUCCESS!!");
    const db = connection.db("Expense-Tracker");

    await db.collection("user").insertOne(reqData);
  } catch (error) {
    console.log("catch block");
    return res.status(500).json({ message: error });
  }
  connection.close();

  res.status(200).json({ message: "Data added to DB", data: reqData });
};

export const getAllUsers = async (req, res, next) => {
  let usersData;
  try {
    await connection.connect();

    const db = connection.db();
    usersData = await db
      .collection("user")
      .find()
      .toArray();
  } catch (error) {
    res.status(500).json({ message: "Could not retreive data!!", error });
  }
  connection.close();

  res.status(200).json({ users: usersData });
};
