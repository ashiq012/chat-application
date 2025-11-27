import {User} from '../models/userModel.js'
import bcrypt from 'bcrypt'
export const register = async(req,res) => {
    try {
        const {fullname , username , password , confirmPassword , gender ,} = req.body
        if(!fullname || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({
                message : "all field are required"
            })
        }
        if(password !== confirmPassword){
            return res.status(400).json({
                message:"please enter correct password"
            })
        }
        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({
                message:"user already exist"
            })
        }
        //password hash 
        const hashPassword = await bcrypt.hash(password,10);
        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`
        try {
            await User.create({
            username,
            fullname,
            password : hashPassword,
            profilePhoto:gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
            gender
        })
        return res.status(200).json({
            message:"user register successfully",
        })
        } catch (error) {
            return res.status(400).json({
                message:error
            })
        }
    } catch (error) {
        return res.status(400).json({
            message:"failed to register try again",
            error:error
        })
    }
}