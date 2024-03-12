import express from "express";
import { createTask, deleteTask, getTasks } from "../controllers/TaskController.js"
import { body } from "express-validator";

const TaskRouter = express.Router();

TaskRouter.get("/", getTasks);
TaskRouter.post("/", body("name", "name cannot be null").notEmpty(), createTask)
TaskRouter.delete("/:id", deleteTask)

export default TaskRouter;