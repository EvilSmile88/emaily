const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { successRedirect: '/',
      failureRedirect: '/auth/google' })
  );

  app.get("/", (req, res) => {
    if(req.user) {
      res.send("Nice to meet you")
    }else res.send("Go away!")
  });

  app.get('/api/logout', function(req, res){
    req.logout();
    res.send(req.user);
  });
};
