import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

const url =
  "mongodb+srv://Sachdev:h07bJvzgSo7F2x0p@cluster0.elpqkkf.mongodb.net/Expense_Tracker?retryWrites=true&w=majority";

export const connection = new MongoClient(url);
console.log("connection-mongo-file", connection);
