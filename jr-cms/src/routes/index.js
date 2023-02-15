const { Router } = require('express');
const studentRouter = require('./students');
const courseRouter = require('./courses');

const router = Router();

router.use('/students', studentRouter);
router.use('/courses', courseRouter);

module.exports = router;
