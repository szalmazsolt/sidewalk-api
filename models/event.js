const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Távcsöves csillagászati bemutató',
    trim: true,
    minLength: [3, 'must be at least 3 characters'],
    maxLength: [100, 'cannot be more than 50 characters']
  },
  description: {
    type: String
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
  contacts: [
    {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true
    }
    }
],
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
  published: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Event', eventSchema);