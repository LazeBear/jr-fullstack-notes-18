const UserModel = require('../models/user');
const { generateToken } = require('../utils/jwt');

const register = async (req, res) => {
  const { username, password } = req.body;
  // validation

  // check duplicate username
  // UserModel.findOne({username}).exec()

  const user = new UserModel({ username, password });
  // bcrypt
  await user.hashPassword();
  await user.save();

  // user = {role: "teacher"}

  // token
  const token = generateToken({ username });

  res.status(201).json({ username, token });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username }).exec();
  if (!user) {
    res.status(401).json({ error: 'invalid username or password' });
    return;
  }
  if (!(await user.validatePassword(password))) {
    res.status(401).json({ error: 'invalid username or password' });
    return;
  }
  const token = generateToken({ username });
  res.json({ username, token });
};

// jwt token - expire time
// refresh token

module.exports = {
  register,
  login,
};
