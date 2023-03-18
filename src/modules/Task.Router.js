

import express from 'express'
import { getAllTasks ,createTask , getTask , updateTask , deleteTask } from './Task.controller.js'


const tasksRouter = express.Router()


tasksRouter.get('/allTasks', getAllTasks)
tasksRouter.post('/createTask', createTask)
tasksRouter.get('/getTask/:id' , getTask)
tasksRouter.patch('/updateTask/:id', updateTask)
tasksRouter.delete('/deleteTask/:id', deleteTask)




export default tasksRouter