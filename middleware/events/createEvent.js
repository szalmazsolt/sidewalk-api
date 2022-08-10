module.exports = (objRepo) => {
  const { Event } = objRepo;
  return async (req, res, next) => {
    const { name, location } = req.body;
    res.locals.event = await Event.create({
      name,
      location,
      createdAt: Date.now()
    });
    next();
  };
};