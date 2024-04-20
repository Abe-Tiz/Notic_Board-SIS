const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    text: { type: String, require: true },
    newNotify: { type: Number, default: 0 },
    read: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
