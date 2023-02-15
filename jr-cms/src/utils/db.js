const mongoose = require('mongoose');

// connection string
// mongoose.connect('mongodb://localhost/jrCMS18');

const connectToDB = () => {
  const connectionString = process.env.CONNECTION_STRING;
  if (!connectionString) {
    console.error('connection string is undefined');
    // 正常退出
    // 非正常退出
    // 人为正常退出 (0)
    // 人为非正常退出 (1)
    process.exit(1);
  }
  const db = mongoose.connection;
  db.on('error', (error) => {
    console.error(error);
    process.exit(2);
  });
  db.on('connected', () => {
    console.log('DB connected!');
  });
  db.on('disconnected', () => {
    console.log('db disconnected!');
  });
  mongoose.set('strictQuery', true);
  return mongoose.connect(connectionString);
};

// event emitter
// socket

module.exports = { connectToDB };
