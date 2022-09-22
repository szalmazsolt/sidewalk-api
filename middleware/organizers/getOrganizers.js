const getOrganizers = (objRepo) => {
  const { Organizer } = objRepo;

  return async (req, res, next) => {
    console.log('get organizers');
    const organizers = await Organizer.find({});
    console.log('Organizers:', organizers);
    res.locals.organizers = organizers;
    console.log('res.locals.organizers:', res.locals.organizers);
    next();
  };

};

module.exports = getOrganizers;