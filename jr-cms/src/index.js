require('dotenv').config();
const express = require('express');
const unknownError = require('./middleware/error/unknownError');
const validationError = require('./middleware/error/validationError');
require('express-async-errors');
const errorHandler = require('./middleware/errorHandler');
const router = require('./routes');
const { connectToDB } = require('./utils/db');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use('/v1', router);

app.use(validationError);
// other error handlers
app.use(unknownError);

connectToDB();

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
