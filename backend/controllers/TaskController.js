import TaskModel from "../models/TaskModel.js"

export const getTasks = async (request, response) => {
    
    try {
        const tasks = await TaskModel.findAll();
        response.status(200).json(tasks);
    }
    catch(error){
        response.status(500).json({message: error.message})
    }

}