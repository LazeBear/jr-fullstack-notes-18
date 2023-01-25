require('dotenv').config();
const helmet = require('helmet');
const express = require('express');
// const cors = require('./middleware/cors');
const cors = require('cors');
// const router = require('./routes/index')
const router = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());
app.use(express.json());
// app.use(cors);
app.use(cors());

app.use(router);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

// proxy

// ?sort=-date

// 1Password

// .local.env
// .dev.env

// morgan - log all requests to our server
// winston - logging library
// log with different levels - ERROR WARNING INFO DEBUG
// out log to different target places - fs, db
