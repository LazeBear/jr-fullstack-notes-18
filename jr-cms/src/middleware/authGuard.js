// hasValidToken

const { validateToken } = require('../utils/jwt');

// isLoggedIn
module.exports = (req, res, next) => {
  const authorization = req.header('Authorization');
  if (!authorization) {
    res.status(401).json({ error: 'missing authorization header' });
    return;
  }
  // Bearer XXXXX
  const tokenArray = authorization.split(' ');
  if (tokenArray.length !== 2 || tokenArray[0] !== 'Bearer') {
    res.status(401).json({ error: 'invalid authorization token format' });
    return;
  }
  try {
    const payload = validateToken(tokenArray[1]);
    req.user = payload;
    next();
  } catch (e) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }
};
