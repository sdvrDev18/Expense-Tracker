import mongoose from "mongoose";

const expenseCategorySchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
  expenseCategory: { type: Array, required: true, default: [] }
});

const expenseSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
    expenseCategory: { type: String, required: true },
    expenseName: { type: String, required: true },
    expenseDescrption: { type: String, required: true },
    expenseAmount: { type: Number, required: true }
  },
  { versionKey: false }
);

export const Category = mongoose.model(
  "expensecategories",
  expenseCategorySchema
);

export const Expense = mongoose.model("expenses", expenseSchema);
