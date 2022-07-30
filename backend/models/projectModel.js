import mongoose from 'mongoose'

const project = new mongoose.Schema({
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