import express from "express";
import {
  getUserDetails,
  addUserDetails,
  getAllUsers
} from "../controllers/user-controller.js";

import { postUserDetails } from "../mongoose.js";

const router = express.Router();

router.get("/:user", getUserDetails);
router.post("/", postUserDetails);
router.get("/", getAllUsers);

export default router;
