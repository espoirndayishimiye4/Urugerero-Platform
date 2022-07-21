const {Schema, default: mongoose} = require('mongoose')

const announcementSchema = new Schema({
    id:{
        type: Number,
        required: [true,'please provide first name']
    },
    adminId:{
        type: Number,
        required: [true,'please provide adminId']
    },
    content:{
        type: String,
        required: [true,'please provide last name']
    },
    status:{
        type: Boolean
    },
    dateTime:{
        type: String
    }
})

const announcement = mongoose.model('announcement',announcementSchema)

module.exports = announcement