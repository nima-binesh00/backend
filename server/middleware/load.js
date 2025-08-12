const middleware = (req, res, next) => {
  console.log(`the api has a new ${req.method} request for URL: ${req.url}`);
  next();
};
module.exports = middleware;
