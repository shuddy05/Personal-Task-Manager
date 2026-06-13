import express from "express";
import {
  createTask,
  editTask,
  removeTask,
  getTasks,
} from "../controller/taskController.js";
const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", editTask);
router.delete("/:id", removeTask);

export default router;
