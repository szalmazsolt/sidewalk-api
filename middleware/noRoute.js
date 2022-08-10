const noRoute = (req, res, next) => {
  res.status(404);
  res.locals = {
    success: false,
    message: 'Route does not exist'
  }
  return res.json(res.locals);
}

module.exports = noRoute;