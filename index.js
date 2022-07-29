const mongoose = require('mongoose')
const express = require('express')
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
require('dotenv').config()
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Urugerero API",
			version: "1.0.0",
			description: "A simple Express Urugerero API",
		},
		servers: [
			{
				url: `http://localhost:${process.env.PORT}`,
			},
		],
	},
	apis: ["./routes/*.js"],
};
const specs = swaggerJsDoc(options);
const app = express()

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

const connDB = require('./config/dbConn')
connDB()

app.use(express.json())

app.use('/post', require('./routes/post'))
app.use('/user', require('./routes/user'))
app.use('/comment', require('./routes/comment'))
app.use('/announcement', require('./routes/announcement'))

mongoose.connection.once('open', ()=>{
    console.log('DB connected')
    app.listen(process.env.PORT,()=>{console.log(`server is running on port ${process.env.PORT}`)})
})