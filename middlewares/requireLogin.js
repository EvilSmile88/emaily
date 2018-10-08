module.exports = (req, res, next) => {
  const url = req.url;
  if(req.url.startsWith('/api') && !req.user) {
    return res.status(401).send({ error: 'You must log in!' });
  }
  next();
};
