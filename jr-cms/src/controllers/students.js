const StudentModel = require('../models/student');

const addStudent = async (req, res) => {
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
  const student = await StudentModel.findById(id).exec();
  if (!student) {
    res.status(404).json({ error: 'student not found' });
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
  res.sendStatus(204);
};

module.exports = {
  addStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};

// exports.xxx = () => {}
