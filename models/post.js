const { required, optional } = require('joi')
const {Schema, default: mongoose} = require('mongoose')

const postSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    content:{
        type: String,
        // required: [true,'please provide content']
    },
    image:{
        type: String,
        // required: optional
    },
    video: {
        type:String,
        // required: optional
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