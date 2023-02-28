// POST /students
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../../src/app');
const StudentModel = require('../../src/models/student');
const { generateToken } = require('../../src/utils/jwt');

const request = supertest(app);
// axios, fetch

const token = generateToken({ username: 'test' });

// https://jestjs.io/docs/configuration/#globalsetup-string
// https://github.com/LazeBear/jr-cms-prod/blob/master/tests/integration/routes/students.test.js
beforeAll(async () => {
  await mongoose.connect(global.__MONGO_URI__);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('/v1/students', () => {
  beforeEach(async () => {
    await StudentModel.deleteMany({});
  });

  describe('create', () => {
    const validStudent = {
      firstName: 'john',
      lastName: 'doe',
      email: 'example@email.com',
    };

    it('should save the student if request is valid', async () => {
      // execute
      const res = await request
        .post('/v1/students')
        .set('Authorization', `Bearer ${token}`)
        .send(validStudent);

      // compare
      expect(res.statusCode).toBe(201);
      const student = await StudentModel.findOne(validStudent).exec();
      expect(student).toBeDefined();
    });

    // markdown
    it.each`
      property       | value
      ${'firstName'} | ${'a'}
      ${'email'}     | ${'invalidEmail'}
      ${'email'}     | ${'invalidEmail@'}
      ${'email'}     | ${'invalidEmail@a'}
      ${'lastName'}  | ${undefined}
    `(
      'should return 400 when $property is $value',
      async ({ property, value }) => {
        const invalidStudent = {
          ...validStudent,
          [property]: value,
        };

        const res = await request
          .post('/v1/students')
          .set('Authorization', `Bearer ${token}`)
          .send(invalidStudent);

        expect(res.statusCode).toBe(400);
      }
    );
  });
});
