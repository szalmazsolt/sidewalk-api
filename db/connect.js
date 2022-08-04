const mongoose = require('mongoose');

module.exports = () => {
  const DBNAME = 'sidewalk-astro';
  const connectionString = 'mongodb+srv://sidewalkastro:1Galagonyas6@sidewalk-astro.1gq9a.mongodb.net/' + 'sidewalk-astro?retryWrites=true&w=majority';
  return mongoose.connect(connectionString)
};

 


  