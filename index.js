const express = require('express');
const noRouteMW = require('./middleware/noRoute');
const errorHandlerMW = require('./middleware/errorHandler');
const { isValidObjectId } = require('mongoose');
const Event = require('./models/event');
const Organizer = require('./models/organizer');
const CustomError = require('./errors/CustomError');
const connectDB = require('./db/connect');
const bcrypt = require('bcryptjs');

const app = express();

// this puts the content of the .env file to the environment variables
require('dotenv').config();

app.use(express.json());

const objectRepository = {
  isValidObjectId,
  Event,
  Organizer,
  CustomError,
  bcrypt
};


const startApp = async () => {

  const port = process.env.PORT || 3000;

  const { 
    MONGODB_USERNAME,
    MONGODB_PASSWORD,
    MONGODB_URI,
    MONGODB_DB_NAME
  } = process.env;

  try {

    await connectDB(`mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_URI}/${MONGODB_DB_NAME}?retryWrites=true&w=majority`);

    console.log('Connected to MongoDB remote server...');

    app.listen(port, '127.0.0.1', console.log(`WebServer is listening on PORT ${port}...`));

    // Mounting route handlers
    app.use('/api/v1/events', require('./routes/events'));
    app.use('/api/v1/organizers', require('./routes/organizers'));
    app.use('*', noRouteMW);
    app.use(errorHandlerMW);

  } catch (error) {
    console.log('An error occured. App could not be started.', error.message, error.stack);
  }
};

startApp();

// const hashPassw = async (passw) => {
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassw = await bcrypt.hash(passw, salt);

//   console.log(passw);
//   console.log(hashedPassw)

//   const passwordsMatch = await bcrypt.compare(passw, hashedPassw);
//   console.log(passwordsMatch);
// };

// hashPassw('secret');

module.exports = objectRepository;

  
