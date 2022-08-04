const express = require('express');
const app = express();

app.use(express.json());


const port = process.env.PORT || 5000;

app.use('/api/v1/events', require('./routes/events'));

app.get('/', (req, res, next) => {
  res.send('Sidewalk Astronomy API')
});

const connectDB = require('./db/connect')();

const startApp = async () => {
  try {
    await connectDB();
    app.listen(port, '127.0.0.1', console.log(`Server is listening on PORT ${port}...`));
  } catch (error) {
    console.log('An error occured. App could not be started.', error)
  }
};

startApp();

  
