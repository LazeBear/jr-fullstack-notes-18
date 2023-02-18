// student.js, Student.js, Student.model.js, student.model.js
// teacher.js, Teacher.js. ...
const { Schema, model } = require('mongoose');
const Joi = require('joi');

const schema = new Schema({
  firstName: {
    type: String, // type: 'string'
    // some basic validation
    minLength: 2,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  // regex
  // validation lib - Joi, Yup, validator.js, express-validator
  email: {
    type: String,
    required: true,
    validate: [
      {
        validator: (email) => {
          // return false -> failed, true -> success
          return !Joi.string().email().validate(email).error;
        },
        msg: 'Invalid email format',
      },
    ],
  },
  courses: [{ type: String, ref: 'Course' }],
});

const StudentModel = model('Student', schema);
// Student model = student document

module.exports = StudentModel;
