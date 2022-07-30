import mongoose from 'mongoose'

const comment = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    shortName:{
        type: String,
        required: true
    },
})

const commentModel = mongoose.model('comment', comment)

export default commentModel