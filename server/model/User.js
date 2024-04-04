const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true, default: "instructor" },
  isCordinator: { type: Boolean, default: false },
  verified: { type: Boolean, default: true },
  image: {
    type: String
  },
  failedLoginAttempts: {
    type: Number,
    required: true,
    default: 0,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
  verificationToken: String,
  password: { type: String },
});

const User = mongoose.model("user", userSchema);

module.exports = User;