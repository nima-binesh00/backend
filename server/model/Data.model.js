const mongoose = require("mongoose");
const { use } = require("react");
const stracher = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  important: { type: Boolean, default: false },
  deadline: { type: Date },
  dirId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Directory",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const directorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
  },
  { timestamps: true }
);
const Directory = mongoose.model("Directory", directorySchema);
const Users = mongoose.model("User", UserSchema);
const Databd = mongoose.model("Task", stracher);
module.exports = { Directory, Databd, Users };
