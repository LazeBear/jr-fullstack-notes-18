const express = require('express');
const {
  getAllTasks,
  getTaskById,
  updateTaskById,
  addTask,
  deleteTaskById,
} = require('../controllers/tasks');
const ownerCheck = require('../middleware/ownerCheck');
// const { Router } = require('express');

const taskRouter = express.Router();

// /tasks/ === /tasks
taskRouter.get('', getAllTasks);

// only task owner can query his task
// middleware -> owner check
taskRouter.get('/:id', ownerCheck, getTaskById);

taskRouter.put('/:id', updateTaskById);

taskRouter.post('', addTask);

taskRouter.delete('/:id', deleteTaskById);

// /tasks/:id/xxxxx/xxx
// taskRouter.get('/:id/xxxx/:xxxId', someMethod)

module.exports = taskRouter;
