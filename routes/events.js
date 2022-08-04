const router = require('express').Router();

const {
  getEvents,
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent
} = require('../middleware/events/index.js');

router.route('/')
  .get(getEvents)
  .post(createEvent)

router.route('/:id')
  .get(getEvent)
  .patch(updateEvent)
  .delete(deleteEvent)

module.exports = router;