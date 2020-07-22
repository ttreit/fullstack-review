const request = require('request');
const config = require('../config.js');
const path = require('path');


let getReposByUsername = (userName) => {
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


  function callback(error, response, body) {
    console.log('****', response);
    if (!error) {
      const info = JSON.parse(body);
      console.log(info.stargazers_count + 'Stars');
      //cb(info) (add callback as second parameter to getReposByUsername)
    }
  }

  request(options, callback);


}

module.exports.getReposByUsername = getReposByUsername;



