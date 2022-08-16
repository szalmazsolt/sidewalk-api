const checkObjectId = (objRepo) => {
  const { isValidObjectId, CustomError } = objRepo;

  return (req, res, next) => {
    if (!isValidObjectId(req.params.id)) {
      const error = new CustomError('Object id is invalid', 400)
      return next(error)
    }
    return next();
  };
};

module.exports = checkObjectId;