const express = require('express');
// require('./xxxx')

const app = express();
app.use(express.json());
// app.use(bodyPaser.json())
app.use(cors);

//code start
const tasks = [];
let id = 1;

//get tasks with query
app.get('/tasks', function (req, res, next) {
  next();
});

// incident

//get all tasks
app.get('/tasks', function (req, res, next) {
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
});
//get task by id
app.get('/tasks/:id', function (req, res) {
  const { id } = req.params;
  const task = tasks.find((task) => task.id === Number(id));
  if (!task) {
    res.status(404).json({ error: 'task not found' });
    return;
  }
  res.json(task);
});
//update task by id  put /tasks/:id
app.put('/tasks/:id', function (req, res) {
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
});
//create a new task
app.post('/tasks', function (req, res) {
  const { description } = req.body;
  // data validation
  // uuid
  const task = { id: id++, description, done: false };
  tasks.push(task);
  res.status(201).json(task);
});

// app.post('/batchTasks')
// app.post('/tasks/bulk')

//delete  /tasks/:id  delete task by id
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((task) => task.id === Number(id));
  if (index === -1) {
    res.status(404).json({ error: 'task not found' });
    return;
  }
  tasks.splice(index, 1);
  res.sendStatus(204); // No Content
  // res.statut(204).json({xxx:xxx}); // body will be ignore
});
//code end

app.listen(3000, () => {
  console.log('server listening on port 3000');
});

function cors(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
}

// fail fast
function foo() {
  // if () {
  //   if () {
  //   }
  // } else {
  // }
  // if failed condition
  // if () {
  //   return;
  // }
  // success logic
  // if () {
  // return
  // }
}
