const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('./middleware/logger');

const app = express();
const port = 1128;

app.use (express.static(path.join(__dirname, '../client/dist/')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger);

app.post('/repos', function (req, res) {
  // TODO - your code here!
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