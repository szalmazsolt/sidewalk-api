const validOrganizerAttributes = (objRepo) => {
  const { CustomError } = objRepo;

  return (req, res, next) => {
    const permittedAttributes = [
      'name',
      'email',
      'password',
      'description',
      'website'
    ];
    
    const updates = Object.keys(req.body);
    const validAttributes = updates.every(key => permittedAttributes.includes(key));
  
    if (!validAttributes) {
      const error = new CustomError('Forbidden attributes for Organizer', 400);
      return next(error);
    }
    
    res.locals.updates = updates;
    return next();
  };
};

module.exports = validOrganizerAttributes;