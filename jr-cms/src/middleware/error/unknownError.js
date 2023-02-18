module.exports = (err, req, res, next) => {
  // record this error -> log / monitorning platform
  // notify devloper
  console.log(err);
  res.status(500).json({ error: 'unable to handle this request' });
};
