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
  },
});

const saltRounds = 10;

userSchema.pre('save', function (next) {
  const user = this;

  // Only hash the password if it has been modified or is new
  if (!user.isModified("password")) return next();

  // Hash the password
  bcrypt.hash(user.password, saltRounds, (err, hash) => {
    if (err) return next(err);

    // Replace the plaintext password with the hashed password
    user.password = hash;
    next();
  });
})


const User = mongoose.model("User", userSchema);

module.exports = User;
