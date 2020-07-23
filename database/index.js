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
      userName: record.userName,
      repoName: record.repoName,
      stars: record.stargazing,
      linkToRepo: record.link
    });

    repo.save(function(err, repo) {
      if (err) return console.error(err);
    })
  }
}

  module.exports.save = save;


    // repo.save(function (err, repo) {
    //   if (err) return console.error(err);
    // }
    // })