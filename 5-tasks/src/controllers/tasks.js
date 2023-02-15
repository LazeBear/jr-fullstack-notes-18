// tasks.controller.js

const tasks = [];
let id = 1;

/**
 *
 *
 */
const getAllTasks = (req, res, next) => {
  const { description, done } = req.query;
  // data validation
  let filteredTasks = tasks;
  if (description) {
    filteredTasks = filteredTasks.filter((task) =>
      task.description.includes(description)
    );
  }
  if (done) {
    filteredTasks = filteredTasks.filter((task) => {
      if (done === 'true') {
        return task.done;
      }
      if (done === 'false') {
        return !task.done;
      }
      return false;
    });
  }

  res.json(filteredTasks);
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id === Number(id));
  if (!task) {
    res.status(404).json({ error: 'task not found' });
    return;
  }
  res.json(task);
};

const updateTaskById = (req, res) => {
  const { id } = req.params;
  const { description, done } = req.body;
  // data validation
  const task = tasks.find((task) => task.id === Number(id));
  if (!task) {
    res.status(404).json({ error: 'task not found' });
    return;
  }
  if (description) {
    task.description = description;
  }
  // string, boolean
  // done == null -> done === null, done === undefined
  if (done != null) {
    task.done = !!done;
  }
  // Falsy value
  // negation, double negation
  // ! 'string' -> ! true -> false
  // ! '' -> ! false  -> true
  // !! 'string' -> true
  res.json(task);
};

const addTask = (req, res) => {
  const { description } = req.body;
  // data validation
  // uuid
  const task = { id: id++, description, done: false };
  tasks.push(task);
  res.status(201).json(task);
};

const deleteTaskById = (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((task) => task.id === Number(id));
  if (index === -1) {
    res.status(404).json({ error: 'task not found' });
    return;
  }
  tasks.splice(index, 1);
  res.sendStatus(204); // No Content
  // res.statut(204).json({xxx:xxx}); // body will be ignore
};

module.exports = {
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  addTask,
};
