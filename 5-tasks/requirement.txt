{
  id: number,
  description: string,
  done: boolean,
}

task 1
{
  "id": 1,
  "description": "clean the room",
  "done": false
}

POST /tasks
{
  description: "clean the room"
}

{
  id: 1,
  description: "clean the room",
  done: false
}

GET /tasks
[
  {
    id: 1,
    description: "clean the room",
    done: false
  }
]

GET /tasks?description=xxxxx

GET /tasks/1
{
  id: 1,
  description: "clean the room",
  done: false
}

PUT /tasks/1
{
  description: "update task",
  done: true
}

{
  id: 1,
  description: "update task",
  done: true
}

DELETE /tasks/1
