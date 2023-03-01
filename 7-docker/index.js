const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.json({ message: 'hello' });
});

app.listen(3000, () => {
  console.log('server listening');
});
