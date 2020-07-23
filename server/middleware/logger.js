const logger = function(req, res, next) {
  console.log(req.method, '---->', req.url);

  //get property
  const getProperty = function() {
    for (let key in req.body) {
      return key;
    }
  }

  req.body.userName = getProperty();
  console.log('body.userName', req.body.userName);

  next()
}

module.exports = logger;
