const {Schema, default: mongoose} = require('mongoose')

const userSchema = new Schema({
    id:{
        type: Number,
        required: [true,'please provide first name']
    },
    firstName:{
        type: String,
        required: [true,'please provide content']
    },
    lastName:{
        type: String,
        required: [true,'please provide content']
    },
    email:{
        type: String,
        required: [true,'please provide email']
    },
    phone:{
        type: String,
        required: [true,'please provide email']
    },
    sector:{
        type: String,
        required: [true,'please provide email']
    },
    status:{
        type: String,
        required: [true,'please provide email']
    },
    dateTime:{
        type: String
    }
})

const user = mongoose.model('user',userSchema)

module.exports = user