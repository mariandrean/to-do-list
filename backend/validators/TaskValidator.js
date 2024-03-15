import { body, check, param } from "express-validator";
import { validateResult } from "../helpers/validateHelpers.js";
import TaskModel from "../models/TaskModel.js";

export const validateCreateTask = [
    check("name")
        .notEmpty().withMessage("name cannot be null")
        .custom(async name => {
            const task = await TaskModel.findOne({ where: { name: name } });
            if (task) {
                throw new Error('task name already exists');
            }
        }),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];

export const validateTaskExistence = [
    param("id")
        .custom(async id => {
            const task = await TaskModel.findByPk(id);
            if (!task) {
                throw new Error(`The task with id:${id} does not exist`);
            }
        }),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

export const validateUpdateTask = [
    check("name")
        .notEmpty().withMessage("name cannot be null"),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];