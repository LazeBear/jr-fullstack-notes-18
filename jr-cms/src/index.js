require('dotenv').config();
const app = require('./app');
const { connectToDB } = require('./utils/db');

const PORT = process.env.PORT || 3000;

connectToDB();

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
