const StudentModel = require('../models/student');
const CourseModel = require('../models/course');

/**
 * 1. callback
 *  StudentModel.find((error, res)=>{
 *    if (error) {
 *      // check error type
 *      res.status(500).json({});
 *      return;
 *    }
 *    // handle response
 * })
 *
 * 2. promise
 *    CourseModel.find().then((res) => {
 *      // handle response
 *    }).catch(e => {
 *      // check error type
 *      res.status(500).json({});
 *      return;
 *    })
 *
 * 3. try and catch
 *  try {
 *    await CourseModel.find();
 *    await xxxx
 *    await yyyy
 *  } catch(e) {
 *    // check error type
 *    res.status(500).json({});
 *    return;
 *  }
 *
 *  express-async-errors
 */

const addStudent = async (req, res) => {
  // try{} catch(e){}
  const { firstName, lastName, email } = req.body;
  // data validation
  // StudentModel.create({firstName, lastName, email})
  // db.students.insertOne
  const student = new StudentModel({ firstName, lastName, email });
  await student.save();
  // error handling is missing
  /**
   * {
   *    data: {}
   *    error: ""
   *    message: ""
   * }
   */
  res.status(201).json(student);
};
const getAllStudents = async (req, res) => {
  // try{} catch(e){}
  // db.students.find()
  // find -> Query
  // query.find => Query, query.sort => Query, query.filter => Query
  // query.find().sort().filter() (query chain, build up our query)
  // pagination
  // exec()
  const students = await StudentModel.find().exec();
  // error handling is missing
  res.json(students);
};
const getStudentById = async (req, res) => {
  const { id } = req.params;
  // let query = StudentModel.findById(id);
  // query = query.populate();
  // await query.exec();
  const student = await StudentModel.findById(id).populate('courses').exec();
  if (!student) {
    res.status(404).json({ error: 'student not found' });
    // class DocumentNotFoundError extends Error {}
    // next(new DocumentNotFoundError('student'))
    return;
  }
  res.json(student);
};
const updateStudentById = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  const student = await StudentModel.findByIdAndUpdate(
    id,
    { firstName, lastName, email },
    { new: true }
  ).exec();
  if (!student) {
    res.status(404).json({ error: 'student not found' });
    return;
  }
  res.json(student);
};
const deleteStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await StudentModel.findByIdAndDelete(id).exec();
  if (!student) {
    res.status(404).json({ error: 'student not found' });
    return;
  }
  await CourseModel.updateMany(
    {
      students: id,
    },
    {
      $pull: {
        students: id,
      },
    }
  ).exec();
  res.sendStatus(204);
};

// '/:studentId/courses/:courseId'
const addStudentToCourse = async (req, res) => {
  const { studentId, courseId } = req.params;
  const student = await StudentModel.findById(studentId).exec();
  const course = await CourseModel.findById(courseId).exec();

  if (!student || !course) {
    res.status(404).json({ error: 'student or course not found' });
    return;
  }

  // trasaction
  // ACID

  // check if relationship already exists
  course.students.addToSet(student._id);
  // student.courses.addToSet(courseId);
  await course.save();
  // await student.save();
  const updatedStudent = await StudentModel.findByIdAndUpdate(
    student._id,
    { $addToSet: { courses: course._id } },
    { new: true }
  ).exec();
  res.json(updatedStudent);
};

// DELETE
const removeStudentFromCourse = async (req, res) => {
  const { studentId, courseId } = req.params;
  const student = await StudentModel.findById(studentId).exec();
  const course = await CourseModel.findById(courseId).exec();

  if (!student || !course) {
    res.status(404).json({ error: 'student or course not found' });
    return;
  }
  await StudentModel.findByIdAndUpdate(studentId, {
    $pull: {
      courses: course._id,
    },
  }).exec();

  await CourseModel.findByIdAndUpdate(courseId, {
    $pull: {
      students: student._id,
    },
  }).exec();

  res.sendStatus(204);
};

module.exports = {
  addStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  addStudentToCourse,
  removeStudentFromCourse,
};

// exports.xxx = () => {}
