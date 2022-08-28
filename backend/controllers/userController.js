import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'

const signJwt = (id) =>{
    return jwt.sign({id:id},'secret-key',{expiresIn: '1d'})
}

export const register = async (req,res,next) =>{
    try {
        const hashPassword = await bcrypt.hash(req.body.password,10)
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            otherName: req.body.otherName,
            school: req.body.school,
            department: req.body.department,
            regNumber: req.body.regNumber,
            email: req.body.email,
            password: hashPassword
        })
        const jwt = signJwt(user.id)
        res.json({user,jwt})
    } catch (err) {
        next(err)
    }
}

export const log_in = async (req,res,next) =>{
    try{
        const email = req.body.email
        const user = await User.findOne({email: email})
        if(!user){
            res.json('wrong credentials')
        }
        const password = await bcrypt.compare(req.body.password,user.password)
        if(password === user.password){
            const jwt = signJwt(user.id)
            res.json({user,jwt})
        }
    }
    catch(err){
        next(err)
    }
}

export const comment = async (req,res,next) =>{
    try {
        const user = await User.find(req.params.id)
        const project = await Project.findById(req.params.id)
        const comment = await Comment.create({
            comment: req.body.comment,
            user:user
        })
        projects.push(comment)
    } catch (err) {
        
    }
}

export const add_favourite = async (req,res,next) =>{
    try{
        const user = await User.findById(req.params.id)
        const project = await Project.findById(req.params.id)
        const favourites = user.updateOne({$push: project})
        res.json(user)
    }catch(err){
        next(err)
    }
}