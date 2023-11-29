import express from "express";
import {
  getUserDetails,
  addUserDetails,
  getAllUsers
} from "../controllers/user-controller.js";

const router = express.Router();

router.get("/:user", getUserDetails);
router.post("/", addUserDetails);
router.get("/", getAllUsers);

export default router;
