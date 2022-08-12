const express = require('express');
const app = express();
const noRouteMW = require('./middleware/noRoute');
const errorHandlerMW = require('./middleware/errorHandler');

// this puts the content of the .env file to the environment variables
require('dotenv').config();

const connectDB = require('./db/connect');

app.use(express.json());


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

    app.use('/api/v1/events', require('./routes/events'));
    app.use('*', noRouteMW);
    app.use(errorHandlerMW);
  } catch (error) {
    console.log('An error occured. App could not be started.', error.message);
  }
};

startApp();

  
