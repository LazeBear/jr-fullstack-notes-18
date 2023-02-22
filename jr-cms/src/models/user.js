const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new Schema({
  // email
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// const user = new User();
// user.hashPassword
schema.methods.hashPassword = async function () {
  // const salt = bcrypt.genSalt(12);
  // playground - new project
  this.password = await bcrypt.hash(this.password, 12);
};

schema.methods.validatePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = model('User', schema);
