const express = require('express');

const app = express();
// app.use(express.json());
// global middleware function
// app.use(m2)

function m1(req, res, next) {
  if (2 > 1) {
    // res.json({ error: 'xxx' });
    next({ error: 123 });
    return;
  }
  console.log(1);
  next();
}

function m2(req, res, next) {
  console.log(2);
  next();
}

app.use(m1);
app.post('/v1/users/:id', m1, m2);
// app.get('/', )

// root path
// application, http methods, ( path , callback function = route handler = middleware function)
// req = request
// res = response
app.get('/', (req, res, next) => {
  // res.send('hello!!');
  res.json({});
  console.log('still gets executed');
  // res.sendStatus(200);
  res.status(201).json({});
  // next()
});

/**
 * get data from request
 * 1. body        -> POST, PUT, PATCH
 *    req.body [app.use(express.json())]
 * 2. query param   ?key=value     -> GET (with filtering)
 *    req.query
 * 3. route param  /v1/users/:userId   -> GET, POST, PUT, DELETE
 *    req.params
 *
 *
 * headers  token
 */
app.post('/v1/users/:id', (req, res) => {
  // const {name} = req.params;
  res.json(req.query);
});

// regex 正则表达式

// const req = {
//   status() {
//     return this;
//   },
//   json() {
//     // xxxx
//   },
// };

// req.status().json();

// middleware chain
// xx chain prototype chain

// function m1(req, res, next) {
//   setTimeout(() => {
//     // other logic
//     next();
//   }, 1000);
//   // next() x
// }

// GET /v1/users
// app.get('/v1/users')
// app.post,app.delete

// app.use('/v1', m1)

// GET /v2/users
// GET /v123/users

// app.use('path', middleware)

// app.get('/v1') x

// app.post('/')
// app.put('/v1/news')
// error , e, err
app.use((error, req, res, next) => {
  res.status(400).json(error);
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
// 3000
// 8000
// 4200
// 9000
// 3333
