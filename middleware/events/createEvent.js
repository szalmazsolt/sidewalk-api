module.exports = (objRepo) => {
  const { Event } = objRepo;
  return async (req, res, next) => {
    const { name, location, organizer } = req.body;
    res.locals.event = await Event.create({
      name,
      location,
      organizer,
      createdAt: Date.now()
    });
    next();
  };
};