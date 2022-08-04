import mongoose from 'mongoose'

const user = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true
    },
    otherName: String,
    school:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    regNumber:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    favourites:Array
})

const userModel = mongoose.model('user', user)

export default userModel