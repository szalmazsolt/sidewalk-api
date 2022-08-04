const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type:String
  },
  location: {
    type:String
  }
});

module.exports = mongoose.model('Event', eventSchema);