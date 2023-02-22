module.exports = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({ error: 'unauthorized' });
    return;
  }
  if (req.user.role === 'teacher') {
    next();
    return;
  }
  res.status(403).json({ error: 'permission denied' });
};
