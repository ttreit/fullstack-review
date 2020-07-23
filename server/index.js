const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('./middleware/logger');
const save = require('../database/index');
const gh = require('../helpers/github');

const port = 1128;
const app = express();

app.use(bodyParser());

app.use(logger);

app.use (express.static(path.join(__dirname, '../client/dist/')));

app.post('/repos', function (req, res) {



  // This route should take the github username provided

  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});