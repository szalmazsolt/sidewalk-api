const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Távcsöves csillagászati bemutató',
    trim: true,
    minLength: [3, 'must be at least 3 characters'],
    maxLength: [50, 'cannot be more than 50 characters']
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  startsAt: {
    type: Date,
    // required: true
  },
  endsAt: {
    type: Date,
    // required: true
  },
  organizer: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    default: 0.0
  },
  capacity: {
    type: Number,
  },
  requiresRegistration: {
    type: Boolean,
    default: false
  },
  cancelled: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  }
});

module.exports = mongoose.model('Event', eventSchema);