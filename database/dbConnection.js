

import mongoose from 'mongoose'



export const dbConnection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/Task-Manager')
        .then(() => console.log('Connect'))
        .catch((err) => console.log(err)) 
}

