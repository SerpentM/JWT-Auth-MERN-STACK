const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const auth = require("./middleware/auth");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 7789;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, { useNewURLParser: true }, () => {
  console.log("connected to db!");
});

app.use("/api/login", require("./routes/api/login"));
// Add User to the datebase
app.use("/api/addusers", auth, require("./routes/api/adduser"));

app.use("/api/displayuser", auth, require("./routes/api/displayUser"));

//Page Auth
app.get("/", auth, (req, res) => {
  res.send(true);
});
// Heroku 

if(process.env.NODE_ENV == "production"){
  app.use(express.static("client/build"));
}
app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});
