const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  emailId: { type: String, required: true, unique: true },
  mobile: { type: Number, required: true },
  password: { type: String, required: true },
  cpassword: { type: String, required: true },
  products: { type: Array },
});

module.exports = mongoose.model("User", userSchema);
