module.exports = (objRepo) => {
  const { Event } = objRepo;

  return async (req, res, next) => {
    const event = await Event.findById(req.params.id);
    res.locals.event = event;
    return next();
  };
};