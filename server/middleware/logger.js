const logger = function(req, res, next) {
  console.log(req.method, '---->', req.url);
  console.log('BODY****', req.body);

  //get property
  const getProperty = function() {
    for (let key in req.body) {
      return key;
    }
  }

  req.body.userName = getProperty();
  console.log('body.username', req.body.userName);

  next()
}

module.exports = logger;
