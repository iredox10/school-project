import mongoose from 'mongoose'

const project = new mongoose.Schema({
    fileName:{
        type: String,
        required: true,
    },
    contentType:{
        type: String,
        required: true,
    },
    base64:{
        type: String,
        required: true,
        select: false
    },
    projectName:{
        type: String,
        required: true,
        unique: true
    },
    program:{
        type: String,
        required: true,
    },
    year:{
        type: String,
        required: true,
    },
    authors:{
        type: [String],
        required: true,
    },
    supervisor:{
        type: String,
        required: true,
    },
    comment: [{
        type: mongoose.Types.ObjectId,
        ref: 'comment'
    }],
})

const projectModel = mongoose.model('project', project)

export default projectModel