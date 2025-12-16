import {User} from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
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

export const login = async(req,res) => {
    try {
        const {username,password} = req.body;
        if(!username || !password){
            return res.status(400).json({
                message:"please fill login details"
            })
        }
        const existUser = await User.findOne({username})
        if(!existUser){
            return res.status(400).json({
                message:"User doesn't exist please register."
            }) 
        }
        const passMatch = await bcrypt.compare(password,existUser.password);
        if(!passMatch){
            return res.status(400).json({
                message:"incorrect password!"
            })
        }
        //after pass match gen token
        const tokenData = {
            userId:existUser._id
        }
        const token = jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{
            expiresIn:'1d'
        })
        return res.status(200).cookie("token",token,
            {
                maxAge:1*24*60*60*1000,
                httpOnly:true,
                sameSite:'strict'
            }).json(
                {
                    _id:existUser._id,
                    username:existUser.username,
                    fullname:existUser.fullname,
                    profilePhoto:existUser.profilePhoto
                })
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success:false,
            message:error
        })
    }
}

export const logout = (req,res) => {
    try {
        return res.status(200).cookie("token",'',{maxAge:0}).json({
            message:"Log out successfully."
        })
    } catch (error) {
        console.log(error)
    }
}