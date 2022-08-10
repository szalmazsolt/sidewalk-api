module.exports = (objRepo) => {
  const { Event, CustomError } = objRepo;

  return async (req, res, next) => {
    const { id } = req.params;
    const permitted_attributes = ['name', 'location'];
    let updateIsValid = true;
   
    Object.keys(req.body).forEach(key => {
      if (!permitted_attributes.includes(key)) {
        updateIsValid = false;
        res.status(400);
        res.locals = {
          success: false,
          message: 'Invalid attributes! Update will not run.'
        };
        return next();
      }
    });
 
    if (updateIsValid) {
      const updates = {...req.body, updatedAt: Date.now()};
      const event = await Event.findOneAndUpdate({_id: id}, updates, {runValidators: true, returnDocument: 'after'});

      if (event === null) {
        const error = new CustomError('Event not found by given id', 404);
        return next(error);
      }

      res.locals = {
        event
      };
      
      return next();
    }
    
    return next();
  };
};