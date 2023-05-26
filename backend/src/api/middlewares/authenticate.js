const { errorResponse } = require('./../helpers/apiResponse');
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const header = req.headers.authorization;
  const token = header && header.split(' ')[1]; //Bearer token hunxa tei vyara paxadi token leko split garera
  if (!token) {
    return res.status(401).json(errorResponse('Unauthenticated', 401));
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res
          .status(403)
          .json(errorResponse('Access token has expired', 403));
      } else {
        return res.status(403).json(errorResponse('Invalid access token', 403));
      }
    }

    next();
  });
};

module.exports = authenticateToken;
