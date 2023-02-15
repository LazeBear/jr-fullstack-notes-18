require('dotenv').config();
const helmet = require('helmet');
const express = require('express');
const morgan = require('morgan');
// const cors = require('./middleware/cors');
const cors = require('cors');
const logger = require('winston');
// const router = require('./routes/index')
const router = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

// winston -> logging -> different level
// error, warning, info, debug
// logger.error('xxxx')
// logstash -> elasticsearch -> kibana

// swagger
// swagger-jsdoc
// swagger-ui-express
// yaml
// yml

app.use(helmet());
app.use(express.json());
// app.use(cors);
app.use(cors());

app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

app.use(router);

app.listen(PORT, () => {
  logger.info(`server listening on port ${PORT}`);
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
