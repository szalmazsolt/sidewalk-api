const organizerExists = (objRepo) => {
  const { CustomError } = objRepo;

  return (req, res, next) => {
    if (res.locals.organizer === null) {
      console.log('Organizer is NULL')
      const error = new CustomError('Requested organizer was not found in the database', 404);
      return next(error);
    }
    return next();
  };
  
};

module.exports = organizerExists;