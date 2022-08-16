const getOrganizers = (objRepo) => {
  const { Organizer } = objRepo;

  return async (req, res, next) => {
    const organizers = await Organizer.find({});
    res.locals.organizers = organizers;
    next();
  };

};

module.exports = getOrganizers;