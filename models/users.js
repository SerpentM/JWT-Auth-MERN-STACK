const mongoose = require("mongoose");

const UserDataScheme = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
    min: 1000000000,
    max: 9999999999,
  },
  email: {
    type: String,
    required: true,
  },
  address: { type: String, required: true },
});

module.exports = mongoose.model("UserData", UserDataScheme);
