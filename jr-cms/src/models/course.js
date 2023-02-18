const { Schema, model } = require('mongoose');

module.exports = model(
  'Course',
  new Schema({
    _id: { type: String, uppercase: true, alias: 'code' }, // 别名
    name: { type: String, required: true },
    // code: {type: String, unique: true },
    description: { type: String, default: 'this is a description' },
    // student: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Student',
    // },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
  })
);

// const course = new CourseModel();
// course.code => course._id
