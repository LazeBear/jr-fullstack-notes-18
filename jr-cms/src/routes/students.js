const { Router } = require('express');
const {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById,
} = require('../controllers/students');

const studentRouter = Router();

studentRouter.get('', getAllStudents);
studentRouter.get('/:id', getStudentById);
studentRouter.post('', addStudent);
studentRouter.put('/:id', updateStudentById);
studentRouter.delete('/:id', deleteStudentById);

module.exports = studentRouter;
