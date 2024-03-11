import express from "express";
import {getTasks} from "../controllers/TaskController.js"

const TaskRouter = express.Router();

TaskRouter.get("/", getTasks);

export default TaskRouter;