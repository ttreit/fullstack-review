const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('./middleware/logger');
const save = require('../database/index');
const getRepos = require('../helpers/github');

const port = 1128;
const app = express();

app.use(bodyParser());

app.use(logger);

app.use (express.static(path.join(__dirname, '../client/dist/')));

app.post('/repos', function (req, res) {
  const callback = function(data) {
    const allRecords = [];
    for (let i = 0; i < data.length; i++) {
      const record = {};
      record.user = data[i].owner.login;
      record.repoName = data[i].name;
      record.stars = data[i].stargazers_count;
      record.linkToRepo = data[i].url;
      save.save(record);
    }
//    return allRecords;
  }
  getRepos(req.body.userName, callback);
  //let gitHubData = getReposByUserName(req.body.userName);
  //console.log('GHDATA:', gitHubData.name);


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