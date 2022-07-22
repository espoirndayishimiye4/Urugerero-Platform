const {Schema, default: mongoose} = require('mongoose')

const userSchema = new Schema({
    firstName:{
        type: String,
        required: [true,'please provide first Name']
    },
    lastName:{
        type: String,
        required: [true,'please provide last Name']
    },
    email:{
        type: String,
        required: [true,'please provide email']
    },
    phone:{
        type: String,
        required: [true,'please provide phone']
    },
    sector:{
        type: String,
        required: [true,'please provide sector']
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

const user = mongoose.model('user',userSchema)

module.exports = user