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
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  }
});

module.exports = mongoose.model('Event', eventSchema);