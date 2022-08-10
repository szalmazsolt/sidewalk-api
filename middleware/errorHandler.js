const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode);

  res.locals = {
    source: 'Express default error handler',
    success: false,
    message: err.message
  };

  return res.json(res.locals);
};

module.exports = errorHandler;