const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  userName: String,
  repoName: String,
  stars: Number,
  linkToRepo: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (record) => {
  if (record !== undefined) {
    const repo = new Repo ({
      userName: record.user,
      repoName: record.repoName,
      stars: record.stars,
      linkToRepo: record.linkToRepo
    });

    repo.save(function(err, repo) {
      if (err) return console.error(err);
    });
    console.log('***SAVE***', repo);
  }
}

  module.exports.save = save;


//if more than one function module.exports.functionName (ex: module.exports.save)


    // repo.save(function (err, repo) {
    //   if (err) return console.error(err);
    // }
    // })