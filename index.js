const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res, next) => {
  res.send('Sidewalk Astronomy API')
});

app.listen(port, '127.0.0.1', console.log(`Server is listening on PORT ${port}...`));