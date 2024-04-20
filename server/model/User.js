const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "instructor" },
  isCordinator: { type: Boolean, default: false },
  verified: { type: Boolean, default: false },
  image: { type: String },
  failedLoginAttempts: { type: Number, required: true, default: 0 },
  isActive: { type: Boolean, required: true, default: true },
  verificationToken: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
