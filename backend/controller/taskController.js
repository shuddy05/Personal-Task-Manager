import Task from "../models/task.js";

export const createTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editTask = async (req, res) => {
  try {
    const editTask = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(editTask);

    if (!editTask) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(editTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeTask = async (req, res) => {
  try {
    const removedTask = await Task.findByIdAndDelete(req.params.id);
    if (!removedTask)
      return res.status(404).json({ message: "Task not found" });
    res.status(200).json(removedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.mesage });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findByI(req.params.id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
