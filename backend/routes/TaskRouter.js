import express from "express";
import { createTask, getTasks } from "../controllers/TaskController.js"

const TaskRouter = express.Router();

TaskRouter.get("/", getTasks);
TaskRouter.post("/", createTask)

export default TaskRouter;