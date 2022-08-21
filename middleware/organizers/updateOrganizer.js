const updateOrganizer = (objRepo) => {
  const { Organizer } = objRepo;

  return async (req, res, next) => {
    const organizer = await Organizer.findById(req.params.id);
    res.locals.updates.forEach(update => organizer[update] = req.body[update]);
    await organizer.save();
    res.locals.organizer = organizer;
    return next();
  };
};

module.exports = updateOrganizer;