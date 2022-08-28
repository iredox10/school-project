import mongoose from 'mongoose'

const comment = new mongoose.Schema({
    comment:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
})

const commentModel = mongoose.model('comment', comment)

export default commentModel