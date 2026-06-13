import express from "express";
import {
  createTask,
  editTask,
  removeTask,
  getTasks,
  getTaskById,
} from "../controller/taskController.js";
const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTaskById);
router.put("/:id", editTask);
router.delete("/:id", removeTask);

export default router;
