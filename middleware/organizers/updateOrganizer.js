const updateOrganizer = (objRepo) => {
  const { Organizer } = objRepo;

  return async (req, res, next) => {
    const organizer = await Organizer.findOneAndUpdate({_id: req.params.id}, req.body, { runValidator: true, returnDocument: 'after' });
    res.locals.organizer = organizer;
    return next();
  };
};

module.exports = updateOrganizer;