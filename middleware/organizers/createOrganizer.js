const createOrganizer = (objRepo) => {
  const { Organizer } = objRepo;

  return async (req, res, next) => {
    const organizer = await Organizer.create(req.body);
    res.locals.organizer = organizer;
    return next();
  };
};

module.exports = createOrganizer;