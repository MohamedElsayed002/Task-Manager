import { TaskModel } from "../../database/models/Task.js";
import { createCustomError } from "../../errors/custom-error.js";
import asyncWrapper from "../middleware/async.js";





export const getAllTasks = asyncWrapper(async (req,res) => {
    const tasks = await TaskModel.find({})
    res.status(200).json({tasks})
})


export const createTask = asyncWrapper(async(req,res) => {
    const task = await TaskModel.create(req.body)
    res.status(201).json({task})
})


export const getTask = asyncWrapper(async(req,res,next) => {
    const {id} = req.params
    let task = await TaskModel.findOne({_id : id})

    if (!task) {
        return next(createCustomError(`no task with id ${id}` ,404))
    }
    res.status(200).json({ task })
})

export const updateTask = asyncWrapper(async(req,res,next) => {
    const {id} = req.params
    const {name} = req.body
    let task = await TaskModel.findByIdAndUpdate({_id : id} , {name : name} , {new : true , runValidators : true})
    if(!task) {
        return next(createCustomError(`no task with id ${id}` ,404))
    }
    res.status(200).json({ task })
})



export const deleteTask = asyncWrapper(async(req,res,next) => {
    const {id} = req.params
    let task = await TaskModel.findByIdAndDelete({_id : id})
    if(!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task })
})