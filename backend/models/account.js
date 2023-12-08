const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  account_type: {
    type: String,
    required: true,
  },
  account_number: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming you have a User model
    required: true,
  },
});

const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;
