const ErrorResponse = require('../utils/errorResponses')
const errorHandler = (err, req, res, next)=>{
    let error = {...err}
    error.message = err.message
    console.log(err)
    // bad object
    if(err.name === 'CastError'){
        const message = `user with id ${err.value} not exist`
        error =new ErrorResponse(message, 404)
    }
    // Validation 
    if(err.name === 'ValidatorError'){
        const message = Object.values(err.error).map(val => val.message)
        error =new ErrorResponse(message, 400)
    }
    //duplicate
    if(err.code === 11000){
        const message = `duplicate record entered`
        error =new ErrorResponse(message, 400)
    }
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "server error"
    })
}

module.exports = errorHandler