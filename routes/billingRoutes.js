const mongoose = require('mongoose');
const keys = require('../config/keys');
const stripe = require("stripe")(`${keys.stripeSecretKey}`);
const User = mongoose.model("users");
const chargeAmount = 500;

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    const { user } = req;

    const newCredits = chargeAmount + user.credits;
    try {
      const charge = await stripe.charges.create({
        amount: chargeAmount,
        source: req.body.id,
        currency: "usd",
        description: "Charge for emaily service"
      });

      const updatedUser = await User.findOneAndUpdate({ googleId: user.googleId }, { credits: +newCredits });
      res.send({...updatedUser, credits: newCredits})
    } catch (e) {
      console.log(e);
      res.status(500).send({error: 'Internal server error!'})
    }
  })
};