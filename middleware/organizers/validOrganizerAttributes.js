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
  
    const validAttributes = Object.keys(req.body).every(key => permittedAttributes.includes(key));
  
    if (!validAttributes) {
      const error = new CustomError('Forbidden attributes for Organizer', 400);
      return next(error);
    }
  
    next();
  };
};

module.exports = validOrganizerAttributes;