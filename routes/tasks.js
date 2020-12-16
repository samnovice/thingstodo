var express = require('express');
var router = express.Router();

/* GET task listing. */
const tasks = [
    {id:1, name:'Create Server', pending: false},
    {id:2, name:'Create Client', pending: true},
    {id:3, name:'get data', pending: true},
    {id:4, name:'display data', pending: true},
    {id:5, name:'toggle completed', pending: true},
    {id:6, name:'add a new task', pending: true},
];
router.get('/', function(req, res, next) {
  res.send(tasks);
});

router.post('/', function(req, res, next) {
  const name = req.body.name;

  if(name){
    tasks.push({id: tasks.length + 1, name: name, pending: true})
    res.send("Task Added");
  }
  else{
    res.send("Task Name Not Sent");
  }
  
});

router.post('/toggle/:id', function(req, res, next) {
  const id = parseInt(req.params.id);

  const task = tasks.find(task => task.id === id);

  if(task){
    task.pending = !task.pending;
    res.send(`Updated status of task with id ${task.id}`);
  }
  else
    res.send(`Couldn't find task with ${task.id}`);

  
});

module.exports = router;
