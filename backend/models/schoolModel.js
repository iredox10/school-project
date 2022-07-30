import mongoose from 'mongoose'

const school = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
        unique: true
    },
    shortName:{
        type: String,
        required: true
    },
    departments:[{
        type: mongoose.Types.ObjectId,
        ref: 'department'
    }]
})

const schoolModel = mongoose.model('school', school)

export default schoolModel