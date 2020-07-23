const request = require('request');
const config = require('../config.js');
const path = require('path');


let getReposByUsername = (userName, callback) => {
  //const gitHubUrl = path.join('https://api.github.com/users/', userName, 'repos');
  //console.log('URL', gitHubUrl);

  //TODO Understand why I could not get it to work with PATH but could get it to work with a template literal

  let options = {
    //url: gitHubUrl,
    url: `https://api.github.com/users/${userName}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };


  function getRepos(error, response, body) {
    if (!error) {
      const info = JSON.parse(response.body);
    callback(info);
   // return allRecords;
    }
  }
  request(options, getRepos);
}
module.exports = getReposByUsername;