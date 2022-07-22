const {Schema, default: mongoose} = require('mongoose')

const adminSchema = new Schema({
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
    status:{
        type: Boolean,
        default:true
    },
    dateTime:{
        type: Date,
        default: Date.now
    }
})

const admin = mongoose.model('admin',adminSchema)

module.exports = admin