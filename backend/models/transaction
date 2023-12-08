const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String, // You might want to reference a Category model instead
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming you have a User model
    required: true,
  },
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
