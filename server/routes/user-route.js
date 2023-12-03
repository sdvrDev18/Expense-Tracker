import express from "express";
import {
  getUserDetails,
  postUserDetails
} from "../controllers/user-controller.js";

const router = express.Router();

router.get("/:username/:password", getUserDetails);
router.post("/", postUserDetails);

export default router;
