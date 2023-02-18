const { Router } = require('express');
const studentRouter = require('./students');
const courseRouter = require('./courses');
const authRouter = require('./auth');

const router = Router();

router.use('/students', studentRouter);
router.use('/courses', courseRouter);
router.use('/auth', authRouter);

module.exports = router;

// user
// /users, /authentication -> register, login -> /auth
// POST /auth/register  - REST X
// POST /users
