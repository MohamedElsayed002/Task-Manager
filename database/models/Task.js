

import mongoose from 'mongoose'

const TaskSchema = mongoose.Schema({
    name : {
        type : String,
        required: [true , 'must provide a name'],
        trim : true,
        maxLength : [20 , 'name mush be less than 20 characters'],
    },
    completed : {
        type : Boolean,
        default :false
    }
})

export const TaskModel = mongoose.model('Task', TaskSchema)