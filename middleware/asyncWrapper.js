const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      error.statusCode = 500;
      return next(error);
    }
  };
};

module.exports = asyncWrapper;