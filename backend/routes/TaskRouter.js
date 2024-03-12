import express from "express";
import { createTask, deleteTask, getOneTask, getTasks, updateTask } from "../controllers/TaskController.js"
import { TaskValidator } from "../validators/TaskValidator.js";

const TaskRouter = express.Router();

TaskRouter.get("/", getTasks);
TaskRouter.get("/:id", getOneTask);
TaskRouter.post("/", TaskValidator, createTask);
TaskRouter.put("/:id", TaskValidator, updateTask);
TaskRouter.delete("/:id", deleteTask)

export default TaskRouter;


/* async const findTaskbyId = (id) => {
    const task = TaskModel.find(id); 
    if (!task) {
        throw new Error('does not exist');
    }
} */