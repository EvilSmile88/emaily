const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const requireLogin = require("./middlewares/requireLogin");
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

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 100,
  keys: [cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(requireLogin);

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if( process.env.NODE_ENV === 'production' ) {
  const path = require('path');
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}