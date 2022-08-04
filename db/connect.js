const mongoose = require('mongoose');

module.exports = (connectionStr) => {
  return mongoose.connect(connectionStr)
};

 


  