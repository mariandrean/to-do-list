import { body, check } from "express-validator";
import { validateResult } from "../helpers/validateHelpers.js";


export const TaskValidator = [
    check("name")
        .notEmpty().withMessage("name cannot be null"),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];