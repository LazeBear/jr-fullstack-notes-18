// list all routes (大路径)

const express = require('express');
const taskRouter = require('./tasks');

const router = express.Router();

router.use('/tasks', taskRouter);

// register, sign in
// router.use('/auth')

// auth middleware

// router.use('/users', userRouter);
// ...

module.exports = router;
