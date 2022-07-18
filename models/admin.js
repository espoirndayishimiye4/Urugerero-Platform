const {Schema, default: mongoose} = require('mongoose')

const adminSchema = new Schema({
    id:{
        type: Number,
        required: [true,'please provide first name']
    },
    firstName:{
        type: String,
        required: [true,'please provide first name']
    },
    lastName:{
        type: String,
        required: [true,'please provide last name']
    },
    password:{
        type: String,
        required: [true,'please provide password']
    },
    dateTime:{
        type: String
    }
})

const admin = mongoose.model('admin',adminSchema)

module.exports = admin