const {Schema, default: mongoose} = require('mongoose')

const postSchema = new Schema({
    userId:{
        type: Number
    },
    content:{
        type: String,
        required: [true,'please provide content']
    },
    image:{
        type: String,
        required: [true,'please provide image']
    },
    status:{
        type: Boolean
    },
    dateTime:{
        type: String
    }
})

const post = mongoose.model('post',postSchema)

module.exports = post