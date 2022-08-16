const eventExists = (objRepo) => {
  const { CustomError } = objRepo;

  return (req, res, next) => {

    if (res.locals.event === null) {
      const error = new CustomError('Requested event was not found in the database', 404);
      return next(error);
    }
    return next();
  };

};

module.exports = eventExists;