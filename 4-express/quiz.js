const express = require('express');
const app = express();
function m1(req, res, next) {
  console.log('m1');
  next();
}
function m2(req, res, next) {
  console.log('m2');
  next();
}
function m3(req, res, next) {
  console.log('m3');
  next();
}
function m4(req, res, next) {
  console.log('m4');
  next();
}
// quiz
// GET /v1/tasks/1
// GET /v1/tasks
app.use(m1);
app.use('/v1', m2);
app.get('/v1/tasks', m3);
app.get('/v1/tasks', m4);
app.get('/v1/tasks/:id', (req, res) => {
  res.json(req.params);
});

app.listen(3000, () => console.log('listen on 3000'));
