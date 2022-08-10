const router = require('express').Router();
const Event = require('../models/event');
const CustomError = require('../errors/CustomError');


const objectRepository = {
  Event, CustomError
};

const getEventsMW = 
  require('../middleware/events/getEvents')(objectRepository);
const createEventMW = 
  require('../middleware/events/createEvent')(objectRepository);
const getEventMW = 
  require('../middleware/events/getEvent')(objectRepository);
const updateEventMW = 
  require('../middleware/events/updateEvent')(objectRepository);
const deleteEventMW = 
  require('../middleware/events/deleteEvent')(objectRepository);
const renderMW =
  require('../middleware/events/render');
const asyncWrapper = require('../middleware/asyncWrapper');

router.route('/')
  .get(asyncWrapper(getEventsMW), renderMW)
  .post(asyncWrapper(createEventMW), renderMW);

router.route('/:id')
  .get(asyncWrapper(getEventMW), renderMW)
  .patch(asyncWrapper(updateEventMW), renderMW)
  .delete(asyncWrapper(deleteEventMW), renderMW);

// router.route('*')
//   .get(notFoundMW, renderMW);

module.exports = router;