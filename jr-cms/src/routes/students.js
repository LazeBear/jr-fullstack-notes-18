const { Router } = require('express');
const {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById,
  addStudentToCourse,
  removeStudentFromCourse,
} = require('../controllers/students');

const studentRouter = Router();

// middleware
// function catchAllErrors(req, res, next) {
//   try {
//     routeHandler(req, res,next)
//   } catch(e) {
//     // handle error
//     next(e)
//   }
// }
// currying function
// high order function - high order component
// function catchAllErrors(routeHandler) {
//   return async (req, res, next) => {
//     try {
//       await routeHandler(req, res, next);
//     } catch (e) {
//       console.log(e);
//       // handle error
//       next(e);
//     }
//   };
// }

studentRouter.get('', getAllStudents);
studentRouter.get('/:id', getStudentById);
studentRouter.post('', addStudent);
studentRouter.put('/:id', updateStudentById);
studentRouter.delete('/:id', deleteStudentById);

studentRouter.post('/:studentId/courses/:courseId', addStudentToCourse);
studentRouter.delete('/:studentId/courses/:courseId', removeStudentFromCourse);

module.exports = studentRouter;
