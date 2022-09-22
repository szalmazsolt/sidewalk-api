const getOrganizerByCredentials = (objRepo) => {
  const { Organizer, CustomError } = objRepo;

  return async (req, res, next) => {
    // Find organizer by email and password
    // This is custom defined Mongoose class method
    console.log('findByCredential MW runs...')
    const result = await Organizer.findByCredentials(req.body.email, req.body.password);
    console.log('result', result);

    if (result === null) return next(new CustomError('Invalid login credentials', 400));  
    
    res.locals.organizer = result;
    return next();
    
  };
};

module.exports = getOrganizerByCredentials;