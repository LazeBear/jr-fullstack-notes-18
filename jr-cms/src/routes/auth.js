const { Router } = require('express');
const { register, login } = require('../controllers/users');

const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);

module.exports = authRouter;
