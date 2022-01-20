const express = require("express");
const router = express.Router();
const UserData = require("../../models/users");

module.exports = router.post("/", async (req, res) => {
  const userData = new UserData({
    username: req.body.username,
    number: req.body.number,
    email: req.body.email,
    address: req.body.address,
  });
  try {
    const saveUser = await userData.save();
    res.send(saveUser);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
