const UserModel = require('../models/user');

const register = async (req, res) => {
  const { username, password } = req.body;
  // validation

  // check duplicate username
  // UserModel.findOne({username}).exec()

  const user = new UserModel({ username, password });
  await user.save();

  // token

  // bcrypt

  res.status(201).json({ username });
};

const login = async (req, res) => {};

// jwt token - expire time
// refresh token

module.exports = {
  register,
  login,
};
