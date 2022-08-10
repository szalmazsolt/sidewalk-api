 module.exports = (objRepo) => {
  const { Event } = objRepo;
  return async (req, res, next) => {
    res.locals.events = await Event.find({});
    console.log(res.locals.events);
    next();
  };
};
