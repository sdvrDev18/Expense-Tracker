import express from "express";
import {
  addExpenseCategory,
  addExpenseDetails
} from "../controllers/expense-controller.js";
const router = express.Router();

//1. add expense categories
router.post("/category", addExpenseCategory);

//2. add expenses
router.post("/expensedetails", addExpenseDetails);

export default router;
