const mongoose = require("mongoose");
const IncomeSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
    required: true,
  },
});

const Income = mongoose.model("Income", IncomeSchema);

module.exports = Income;
