import express from "express";
import { createTask, deleteTask, getTasks } from "../controllers/TaskController.js"

const TaskRouter = express.Router();

TaskRouter.get("/", getTasks);
TaskRouter.post("/", createTask)
TaskRouter.delete("/:id", deleteTask)

export default TaskRouter;