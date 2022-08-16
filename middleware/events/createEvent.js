module.exports = (objRepo) => {
  const { Event } = objRepo;
  
  return async (req, res, next) => {
    const event = await Event.create(req.body);
    res.locals = event;
    next();
  };
};