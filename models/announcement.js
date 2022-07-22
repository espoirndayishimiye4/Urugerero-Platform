const {Schema, default: mongoose} = require('mongoose')

const announcementSchema = new Schema({
    adminId:{
        type: Number
    },
    content:{
        type: String,
        required: [true,'please provide content']
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

const announcement = mongoose.model('announcement',announcementSchema)

module.exports = announcement