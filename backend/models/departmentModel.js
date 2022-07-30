import mongoose from 'mongoose'

const department = new mongoose.Schema({
    departmentName:{
        type: String,
        required: true,
        unique: true
    },
    projects:[{
        type: mongoose.Types.ObjectId,
        ref: 'project'
    }]
})

const departmentModel = mongoose.model('department', department)

export default departmentModel