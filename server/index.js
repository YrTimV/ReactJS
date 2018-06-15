const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const config = require('./config');
const routes_user = require('./routes/user');

const app = express();
app.use(cors());
app.use(bodyparser.json());

mongoose.connect(config.connection.connectionString)
  .then(() => {
    routes_user(app);

    app.all('*', (req, res) => {
      res.status(404).json();
    });

    app.listen(3000, () => {
      console.info(`Server is listening on port 3000...`);
    });
  })
  .catch((error) => {
    console.error(error);
    
    exit();
  });
