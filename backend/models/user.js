const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
  username: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  }
});

const saltRounds = 10;

userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    console.log(error);
    next(error)

  }  
  });

const User = mongoose.model("User", userSchema);

module.exports = User;
