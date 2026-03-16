const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    description: req.body.description,
    UserId: req.user.id
  });

  res.json(task);
};

exports.getTasks = async (req, res) => {
  const page = req.query.page || 1;
  const limit = 10;

  const offset = (page - 1) * limit;

  const tasks = await Task.findAll({
    where: { UserId: req.user.id },
    limit,
    offset
  });

  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  await task.update(req.body);
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  await task.destroy();
  res.json("Task deleted");
};
