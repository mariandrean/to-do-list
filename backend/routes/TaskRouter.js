import express from "express";
import { createTask, deleteTask, getOneTask, getTasks, updateTask } from "../controllers/TaskController.js"
import { validateCreateTask, validateTaskExistence, validateUpdateTask } from "../validators/TaskValidator.js";

const TaskRouter = express.Router();

TaskRouter.get("/", getTasks);
TaskRouter.get("/:id", getOneTask);
TaskRouter.post("/", validateCreateTask, createTask);
TaskRouter.put("/:id", validateTaskExistence, validateUpdateTask, updateTask);
TaskRouter.delete("/:id", validateTaskExistence, deleteTask)

export default TaskRouter;