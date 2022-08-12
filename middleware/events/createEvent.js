module.exports = (objRepo) => {
  const { Event } = objRepo;
  
  return async (req, res, next) => {
    const { name, location, organizer, description, price, objects, requiresRegistration } = req.body;

    res.locals.event = await Event.create({
      name,
      location,
      organizer,
      description,
      price,
      objects,
      requiresRegistration,
      createdAt: Date.now()
    });

    next();
  };
};