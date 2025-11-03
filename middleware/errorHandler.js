module.exports = (err, req, res, next) => {
  console.error(' Error:', err.message);

  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({
      error: 'CORS: Origin not allowed',
      origin: req.headers.origin || 'unknown',
    });
  }

  const status = err.statusCode || 500;
  res.status(status).json({
    error: err.message || 'Internal Server Error',
  });
};