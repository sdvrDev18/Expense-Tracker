import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import userRoute from "./routes/user-route.js";
import dataRoute from "./routes/data-route.js";

const app = express();

const url =
  "mongodb+srv://Sachdev:Thegodfather%400@cluster0.elpqkkf.mongodb.net/Expense-Tracker?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api", userRoute);
app.use("/data", dataRoute);

app.use((error, req, res, next) => {
  if (error) res.status(500).send(error);
});

mongoose
  .connect(url)
  .then(() => {
    console.log("DB connection success");
    app.listen(5000);
  })
  .catch(error => console.log("Could not connect to DB"));
