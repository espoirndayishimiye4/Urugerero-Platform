const {Schema, default: mongoose} = require('mongoose')

const commentSchema = new Schema({
    id:{
        type: Number,
        required: [true,'please provide first name']
    },
    postId:{
        type: Number,
        required: [true,'please provide postId']
    },
    userId:{
        type: Number
    },
    content:{
        type: String,
        required: [true,'please provide content']
    },
    status:{
        type: Boolean
    },
    dateTime:{
        type: String
    }
})

const comment = mongoose.model('comment',commentSchema)

module.exports = comment