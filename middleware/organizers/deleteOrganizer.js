const deleteOrganizer = (objRepo) => {
  const { Organizer } = objRepo;

  return async (req, res, next) => {
    const organizer = await Organizer.findOneAndDelete({_id: req.params.id});
    res.locals.organizer = organizer;
    return next();
  };

};

module.exports = deleteOrganizer;