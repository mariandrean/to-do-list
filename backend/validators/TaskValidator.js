import { body, check, param } from "express-validator";
import { validateResult } from "../helpers/validateHelpers.js";
import TaskModel from "../models/TaskModel.js";

export const CreateTaskValidator = [
    check("name")
        .notEmpty().withMessage("name cannot be null")
        .custom(async name => {
            const task = await TaskModel.findOne({where: {name: name}});
            if (task) {
                throw new Error('already exists');
            }
        }),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];

export const UpdateTaskValidator = [
    check("name")
        .notEmpty().withMessage("name cannot be null"),

    param("id")
        .custom(async id => {
            const task = await TaskModel.findByPk(id);
            if (!task) {
                throw new Error('does not exist');
            }
        }),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];

export const DeleteTaskValidator = [
    param("id")
        .custom(async id => {
            const task = await TaskModel.findByPk(id);
            if (!task) {
                throw new Error('does not exist');
            }
        }),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]