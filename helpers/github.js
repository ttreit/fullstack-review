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
      console.log(info[3].stargazers_count + ' Stars');
      console.log(info[3].owner.login + ' Owner');
      console.log(info[3].url + ' URL');
      console.log(info[3].name + ' Repo Name');
    callback(info);

      //cb(info) (add callback as second parameter to getReposByUsername)
    }
  }
  request(options, getRepos);
}
module.exports = getReposByUsername;

const callback = function(dataObject) {
  const allRecords = [];
  for (let i = 0; i < dataObject.length; i++) {
    const record = {};
    record.userName = dataObject[i].owner.login;
    record.repoName = dataObject[i].name;
    record.stars = dataObject[i].stargazers_count;
    record.linkToRepo = dataObject[i].url;
    allRecords.push(record);
  }
  console.log('allRECORDS', allRecords);
}
getReposByUsername('ttreit', callback);

