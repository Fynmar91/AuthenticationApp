const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");

// Initialize app
const app = express();

// Middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
// Bring in Passport Strategy
require("./config/passport")(passport);

// Setting static directory
app.use(express.static(path.join(__dirname, "public")));

// Bring in database config and connect
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Database connected successfully ${db}`);
  })
  .catch((err) => {
    console.log(`Unable to connect to the database ${err}`);
  });

// app.get("/", (req, res) => {
//   return res.send("<h1>Hello World</h1>");
// });

// Bring in Users route
const users = require("./routes/api/users");
app.use("/api/users", users);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
