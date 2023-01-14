const http = require('http');
// express
const fs = require('fs'); // filesystem
const path = require('path');

const homePage = fs.readFileSync(path.join(__dirname, 'home.html'));

const server = http.createServer((req, res) => {
  if (req.url === '/about') {
    res.write('about me');
    res.end();
    return;
  }
  if (req.url === '/home') {
    res.write(homePage);
    res.end();
    return;
  }
  res.write('hello');
  res.end();
});

// event listener -> web api
server.listen(3000);

// api

// FE
// input field -> search keyword
// click submit button -> AJAX request -> https://api.com/search?q=keyword
// BE
// HTTP Method, path -> logic trigger
// GET /search?q=keyword
// 'search' callback handle
// query database with keyword
// Database
// BE response the request
// FE receive the data
