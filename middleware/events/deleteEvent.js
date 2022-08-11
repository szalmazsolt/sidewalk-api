module.exports = (objRepo) => {
  const { Event, CustomError, isValidObjectId } = objRepo;

  return async (req, res, next) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      const error = new CustomError('Invalid id format', 400);
      return next(error);
    }
    
    const event = await Event.findOneAndDelete({ _id: id });
    if (event === null) {
      const error = new CustomError('No event found by given id!!!', 404);
      return next(error);
    }
    res.locals = {
      success: true,
      event
    }
    return next();
  };
};