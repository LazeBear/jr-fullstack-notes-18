module.exports = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    res.status(400).json({ error: err.message });
    return;
  }
  // if(err instanceof DocumentNotFound) {
  //  res.status(404).json({error: `${err.name} not found`})
  // }
  // if()
  console.log(err);
  res.status(500).json({ error: 'unable to handle this request' });
};
