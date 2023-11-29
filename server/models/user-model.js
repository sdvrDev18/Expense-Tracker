import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  age: { type: Number, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true }
});

export const User = mongoose.model("users", userSchema);
