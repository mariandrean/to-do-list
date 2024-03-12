import express from "express";
import { createTask, deleteTask, getOneTask, getTasks } from "../controllers/TaskController.js"
import { TaskValidator } from "../validators/TaskValidator.js";

const TaskRouter = express.Router();

TaskRouter.get("/", getTasks);
TaskRouter.get("/:id", getOneTask);
TaskRouter.post("/", TaskValidator, createTask);
/* TaskRouter.delete("/:id", param("id", "does not exist").custom(id => findTaskbyId(id)), deleteTask) */

export default TaskRouter;


/* async const findTaskbyId = (id) => {
    const task = TaskModel.find(id); 
    if (!task) {
        throw new Error('does not exist');
    }
} */