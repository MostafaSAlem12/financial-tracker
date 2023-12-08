const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
  category: {
    type: String, // You might want to reference a Category model instead
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming you have a User model
    required: true,
  },
});

const Budget = mongoose.model("Budget", BudgetSchema);

module.exports = Budget;
