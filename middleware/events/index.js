
const getEvents = (req, res, next) => {
  console.log('get events')
};
const createEvent = (req, res, next) => {
  console.log('create event')
};
const getEvent = (req, res, next) => {
  console.log('get event')
};
const updateEvent = (req, res, next) => {
  console.log('update event')
};
const deleteEvent = (req, res, next) => {
  console.log('delete event')
};

module.exports = {
  getEvents,
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent
}