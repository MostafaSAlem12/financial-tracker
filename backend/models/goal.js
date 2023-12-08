const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema({
  goal_type: {
    type: String,
    required: true,
  },
  target_amount: {
    type: Number,
    required: true,
  },
  target_date: {
    type: Date,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming you have a User model
    required: true,
  },
});

const Goal = mongoose.model("Goal", GoalSchema);

module.exports = Goal;
