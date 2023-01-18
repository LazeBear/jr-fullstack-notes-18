const express = require('express');

const app = express();

const tasks = [];
let id = 1;
// uuid, nanoid

app.use(cors);

app.get('/tasks', (req, res) => {
  res.json({});
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});

function cors(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
}
