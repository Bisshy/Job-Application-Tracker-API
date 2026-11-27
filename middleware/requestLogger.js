function getLogger(req, res, next) {
  const { method, originalUrl } = req;
  console.log(`${method} ${originalUrl}`);

  next();
}

export default getLogger;
