module.exports = (objRepo) => {
  const { Event } = objRepo;

  return async (req, res, next) => {
    const event = await Event.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true, returnDocument: 'after'});
    res.locals.event = event;
    return next();
  };
};