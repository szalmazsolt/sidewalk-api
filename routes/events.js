const router = require('express').Router();

// importing dependences
const objectRepository = require('../index');

// Importing middleware for event resource
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
const asyncWrapper = 
  require('../middleware/asyncWrapper');
const checkObjectIdMW = 
  require('../middleware/checkObjectId')(objectRepository);
const validEventAttributesMW = 
  require('../middleware/events/validEventAttributes')(objectRepository);
const eventExistsMW = 
  require('../middleware/events/eventExists')(objectRepository);

router.route('/')
  .get(
    asyncWrapper(getEventsMW),
    renderMW
  )
  .post(
    validEventAttributesMW,
    asyncWrapper(createEventMW),
    renderMW
  );

router.route('/:id')
  .get(
    checkObjectIdMW,
    asyncWrapper(getEventMW),
    eventExistsMW,
    renderMW
  )
  .patch(
    checkObjectIdMW,
    validEventAttributesMW,
    asyncWrapper(updateEventMW),
    eventExistsMW,
    renderMW
  )
  .delete(
    checkObjectIdMW,
    asyncWrapper(deleteEventMW),
    eventExistsMW,
    renderMW
  );


module.exports = router;