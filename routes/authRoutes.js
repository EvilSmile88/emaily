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
    passport.authenticate("google", { successRedirect: '/surveys',
      failureRedirect: '/auth/google' })
  );

  app.get('/api/logout', function(req, res){
    req.logout();
    res.redirect("/");
  });

  app.get('/api/current_user', function(req, res){
    res.send(req.user);
  });
};
