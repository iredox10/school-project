import User from "../models/userModel";
import jwt from "jsonwebtoken";
im
const signJwt = (id) =>{
    return jwt.sign({id:id},process.env.JWT_SEC_KEY,{expiresIn: '1d'})
}

export const register = async (req,res,next) =>{
    try {
        const user = await User.create(req.body)

        signJwt(user.id)
    } catch (err) {
        next(err)
    }
}