const mongoose = require('mongoose')
const express = require('express')
const swaggerDocs = require('./public/api-docs/swagger');
const errorHandler = require('./middlewares/error')

require('dotenv').config()


const app = express()

swaggerDocs(app, process.env.PORT);

const connDB = require('./config/dbConn')
connDB()

app.use(express.json())

app.use('/post', require('./routes/post'))
app.use('/user', require('./routes/user'))
app.use('/comment', require('./routes/comment'))
app.use('/announcement', require('./routes/announcement'))
app.use(errorHandler)

mongoose.connection.once('open', ()=>{
    console.log('DB connected')
    app.listen(process.env.PORT,()=>{console.log(`server is running on port ${process.env.PORT}`)})
})