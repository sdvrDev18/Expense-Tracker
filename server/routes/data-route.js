import express from "express";

import { userData } from "../data/user-data.js";

const router = express.Router();

router.get("/:data", (req, res, send) => {
  // const requestData = req.param.data;
  // const addedData =
  console.log("userData", userData);
  res.status(200).send("new data added");
});

export default router;
