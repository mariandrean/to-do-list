import express from "express";
import { createTask, deleteTask, getAllTasks, getOneTask, updateTask } from "../controllers/TaskController.js"
import { validateCreateTask, validateTaskExistence, validateUpdateTask } from "../validators/TaskValidator.js";

const TaskRouter = express.Router();

TaskRouter.get("/", getAllTasks);
TaskRouter.get("/:id", getOneTask);
TaskRouter.post("/", validateCreateTask, createTask);
TaskRouter.put("/:id", validateTaskExistence, validateUpdateTask, updateTask);
TaskRouter.delete("/:id", validateTaskExistence, deleteTask)

export default TaskRouter;