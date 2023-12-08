const mongoose = require("mongoose");
const ExpenseSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
    required: true,
  }
});

const Expense = mongoose.model("User", ExpenseSchema);

module.exports = Expense;
