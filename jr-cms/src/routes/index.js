const { Router } = require('express');
const studentRouter = require('./students');
const courseRouter = require('./courses');
const authRouter = require('./auth');
const authGuard = require('../middleware/authGuard');
const isTeacherRole = require('../middleware/isTeacherRole');

const router = Router();

router.use('/students', authGuard, studentRouter);
router.use('/courses', courseRouter);
// RBAC role based access control
// router.use('/courses', authGuard, isTeacherRole, courseRouter);
router.use('/auth', authRouter);

module.exports = router;

// user
// /users, /authentication -> register, login -> /auth
// POST /auth/register  - REST X
// POST /users
