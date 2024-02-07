import { Category, Expense } from "../models/expense-model.js";
import { User } from "../models/user-model.js";

export const addExpenseCategory = async (req, res, next) => {
  let result;
  try {
    console.log("POST category Success!!");
    result = await User.findById(req.body.userId);
    result.expenseCategory = [
      ...result.expenseCategory,
      ...req.body.expenseCategory
    ];
    await result.save();
  } catch (error) {
    console.log("POST category failed!!");
    res.status(404).json({
      message: "Could not add expense category",
      status: false,
      error
    });
  }
  res.status(200).json({
    message: "Added new expense category!!",
    status: true,
    data: result
  });
};

export const addExpenseDetails = async (req, res, next) => {
  let result;

  const expenseReq = new Expense({
    userId: req.body._id,
    expenseCategory: req.body.expenseCategory,
    expenseName: req.body.expenseName,
    expenseDescrption: req.body.expenseDescrption,
    expenseAmount: req.body.expenseAmount
  });

  const checkUserExist = await User.findById(req.body._id);

  if (checkUserExist) {
    try {
      result = await expenseReq.save();
    } catch (error) {
      console.log("Error finding user with given id");
      res.status(404).json({
        message: "Error finding user with given id",
        status: false,
        error
      });
    }

    res.status(200).json({
      message: "Success!! Added new expense details",
      status: true,
      data: result
    });
  }
};
