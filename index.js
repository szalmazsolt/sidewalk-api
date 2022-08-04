const express = require('express');
const app = express();
const connectDB = require('./db/connect');

app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res, next) => {
  res.send('Sidewalk Astronomy API');
});

const startApp = async () => {
  try {
    await connectDB();
    console.log('Connected to MongoDB remote server...')
    app.listen(port, '127.0.0.1', console.log(`WebServer is listening on PORT ${port}...`));
    app.use('/api/v1/events', require('./routes/events'));
  } catch (error) {
    console.log('An error occured. App could not be started.', error.message);
  }
};

startApp();

  
