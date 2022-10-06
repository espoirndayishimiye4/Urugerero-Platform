const {Schema, default: mongoose} = require('mongoose')

const postSchema = new Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        require: true

    },
    content:{
        type: String,
        required: [true,'please provide content']
    },
    file:{
        type: String,
        required: [true,'please provide file']
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

const post = mongoose.model('post',postSchema)

module.exports = post