module.exports = (objRepo) => {
  const { Event, CustomError } = objRepo;
  return async (req, res, next) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      const error = new CustomError('Invalid id format', 400);
      return next(error);
    }

    console.log('ID: ', id);

    const event = await Event.findById(id);
    if (event === null) {
        const error = new CustomError('No event found by given id', 404);
        return next(error);
    }
    
    console.log('Event is: ', event);
    res.locals.event = event;
    return next();
  };
};