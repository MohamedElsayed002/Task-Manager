

import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import errorHandlerMiddlerWare from './src/middleware/error-handler.js'
import notFound from './src/middleware/notFound.js'
import tasksRouter from './src/modules/Task.Router.js'
import cors from 'cors'
const app = express()



app.use(express.static('./public'))
app.use(express.json())
app.use(tasksRouter)
app.use(notFound)
app.use(errorHandlerMiddlerWare)
dbConnection()




app.listen(3001, () => {
    console.log("Server is running on port 3000")
})
