// app.js
const express = require('express');
const { v4: uuidv4 } = require('uuid'); // Generador de IDs únicos
const app = express();
const port = process.env.PORT || 3000;

let tasks = [];

app.use(express.json());

// Obtener todas las tareas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Obtener una tarea por su ID
app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

// Añadir una nueva tarea
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: "Title and description are required" });
  }
  
  const task = {
    id: uuidv4(),
    title,
    description,
    completed: false,
  };

  tasks.push(task);
  res.status(201).json(task);
});

// Actualizar una tarea por su ID
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (task) {
    const { title, description, completed } = req.body;
    task.title = title || task.title;
    task.description = description || task.description;
    task.completed = completed !== undefined ? completed : task.completed;
    res.json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

// Eliminar una tarea por su ID
app.delete('/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id === req.params.id);
  if (taskIndex >= 0) {
    const deletedTask = tasks.splice(taskIndex, 1);
    res.status(200).json(deletedTask);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

app.listen(port, () => {
  console.log(`API de tareas escuchando en http://localhost:${port}`);
});
