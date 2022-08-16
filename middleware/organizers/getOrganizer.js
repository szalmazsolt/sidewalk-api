const getOrganizer = (objRepo) => {
  const { Organizer } = objRepo;

  return async (req, res, next) => {
    const organizer = await Organizer.findById(req.params.id);
    res.locals.organizer = organizer;
    next();
  };
};

module.exports = getOrganizer;