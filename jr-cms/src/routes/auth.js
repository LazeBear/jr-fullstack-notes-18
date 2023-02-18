const { Router } = require('express');
const { register } = require('../controllers/users');

const authRouter = Router();

authRouter.post('/register', register);

module.exports = authRouter;
