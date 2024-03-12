import express from "express";
import { createTask, deleteTask, getOneTask, getTasks, updateTask } from "../controllers/TaskController.js"
import { CreateTaskValidator, UpdateTaskValidator, DeleteTaskValidator } from "../validators/TaskValidator.js";

const TaskRouter = express.Router();

TaskRouter.get("/", getTasks);
TaskRouter.get("/:id", getOneTask);
TaskRouter.post("/", CreateTaskValidator, createTask);
TaskRouter.put("/:id", UpdateTaskValidator, updateTask);
TaskRouter.delete("/:id", DeleteTaskValidator, deleteTask)

export default TaskRouter;