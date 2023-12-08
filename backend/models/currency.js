const mongoose = require("mongoose");

const CurrencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
  },
});

const Currency = mongoose.model("Currency", CurrencySchema);

module.exports = Currency;
