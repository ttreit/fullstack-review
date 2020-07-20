const logger = function(req, res, next) {
  console.log(req.method, '---->', req.url);
  console.log('BODY****', req.body);
  next()
}

module.exports = logger;
