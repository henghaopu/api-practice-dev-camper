// @desc      Logs request to console
const logger = (req, res, next) => {
  // set a value on req obj, then we can access in any route that come after this middleware
  // req.hello = 'Hello World!';
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );
  // we need to call next() in every middleware we create, so it can move on to the next middleware
  next();
};

module.exports = logger;
