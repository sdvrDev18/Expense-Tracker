import express from "express";
import bodyParser from "body-parser";

import userRoute from "./routes/user-route.js";
import dataRoute from "./routes/data-route.js";

const app = express();

app.use(bodyParser.json());

app.use("/api", userRoute);
app.use("/data", dataRoute);

app.use((error, req, res, next) => {
  if (error) res.status(500).send(error);
});

app.listen(5000);
