const CourseModel = require('../models/course');
const StudentModel = require('../models/student');
// const Joi = require('joi');
const { addCourseSchema } = require('../validations/course');

const addCourse = async (req, res) => {
  // const { code, description, name } = req.body;
  // validation schema
  // const schema = Joi.object({
  //   name: Joi.string().min(2).max(10).required(),
  //   // ABC 1234
  //   // NODE123
  //   code: Joi.string()
  //     .regex(/^[a-zA-Z]+[0-9]+$/)
  //     .message('Invalid course code')
  //     .required(),
  //   description: Joi.string(),
  // });

  const validBody = await addCourseSchema.validateAsync(req.body, {
    allowUnknown: true,
    stripUnknown: true,
  });

  // repo
  // fe
  // validation
  // be
  const course = new CourseModel(validBody);
  await course.save();
  res.status(201).json(course);
};
const getAllCourses = async (req, res) => {
  const courses = await CourseModel.find().exec();
  res.json(courses);
};
const getCourseById = async (req, res) => {
  const { id } = req.params;
  const course = await CourseModel.findById(id).populate('students').exec();
  if (!course) {
    res.status(404).json({ error: 'Course not found' });
    return;
  }
  res.json(course);
};
const updateCourseById = async (req, res) => {
  const { id } = req.params;
  const { description, name } = req.body;
  const course = await CourseModel.findByIdAndUpdate(
    id,
    { description, name },
    { new: true }
  ).exec();
  if (!course) {
    res.status(404).json({ error: 'Course not found' });
    return;
  }
  res.json(course);
};
const deleteCourseById = async (req, res) => {
  const { id } = req.params;
  const course = await CourseModel.findByIdAndDelete(id).exec();
  if (!course) {
    res.status(404).json({ error: 'Course not found' });
    return;
  }
  // student document : {courses: [s1,s2]}
  await StudentModel.updateMany(
    { courses: id },
    {
      $pull: {
        courses: id,
      },
    }
  ).exec();
  res.sendStatus(204);
};

module.exports = {
  addCourse,
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
};
