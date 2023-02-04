// tasks.controller.js

const tasks = [];
let id = 1;

const getAllTasks = (req, res, next) => {
  const { content, completed } = req.query;
  // data validation
  let filteredTasks = tasks;
  if (content) {
    filteredTasks = filteredTasks.filter((task) =>
      task.content.includes(content)
    );
  }
  if (completed) {
    filteredTasks = filteredTasks.filter((task) => {
      if (completed === 'true') {
        return task.completed;
      }
      if (completed === 'false') {
        return !task.completed;
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
  const { content, completed } = req.body;
  // data validation
  const task = tasks.find((task) => task.id === Number(id));
  if (!task) {
    res.status(404).json({ error: 'task not found' });
    return;
  }
  // check is boolean
  if (completed !== undefined) {
    if (typeof completed !== 'boolean') {
      res.status(400).json({ error: 'completed must be boolean' });
      return;
    }
    task.completed = completed;
  }
  if (content) {
    task.content = content;
  }
  // string, boolean
  // completed == null -> completed === null, completed === undefined
  // if (completed != null) {
  //   task.completed = !!completed;
  // }
  // Falsy value
  // negation, double negation
  // ! 'string' -> ! true -> false
  // ! '' -> ! false  -> true
  // !! 'string' -> true
  res.json(task);
};

const addTask = (req, res) => {
  const { content } = req.body;
  if (!content) {
    res.status(400).json({ error: 'content is required' });
    return;
  }
  // data validation
  // uuid
  const task = { id: id++, content, completed: false };
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
