module.exports = (req, res, next) => {
  return res.json(res.locals);
};