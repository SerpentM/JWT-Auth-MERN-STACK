const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const UserData = require("../../models/users");
module.exports = router.get("/", (req, res) => {
  UserData.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
