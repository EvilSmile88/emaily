const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
require("./services/passport");
const { mongoURI, cookieKey } = require("./config/keys");
const PORT = process.env.PORT || 5000;

mongoose.connect(mongoURI, (err, res) => {
  if (err) {
    throw new Error(err)
  }
});

const app = express();

app.listen(PORT, (err, res) => {
  console.log(`Server is running on ${PORT}`);
});
app.use(express.static('./public'))
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 100,
  keys: [cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);
