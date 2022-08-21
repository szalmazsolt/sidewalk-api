const createOrganizer = (objRepo) => {
  const { Organizer } = objRepo;

  return async (req, res, next) => {
    const organizer = new Organizer(req.body);
    await organizer.save();
    res.locals.organizer = organizer;
    return next();
  };
};

module.exports = createOrganizer;