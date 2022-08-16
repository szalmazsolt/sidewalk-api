const validEventAttributes = (objRepo) => {
  const { CustomError } = objRepo;

  return (req, res, next) => {
    const permitted_attributes = [
      'name',
      'description',
      'location',
      'startsAt',
      'endsAt',
      'organizer',
      'contacts',
      'price',
      'capacity',
      'requiresRegistration',
      'cancelled',
      'published'

    ];   
    const updateIsValid = Object.keys(req.body).every(key => permitted_attributes.includes(key));

    if (!updateIsValid) {
      const error = new CustomError('Forbidden attributes. Update will not be performed', 400);
      return next(error);
    }
    
    return next();
  };
}

module.exports = validEventAttributes;