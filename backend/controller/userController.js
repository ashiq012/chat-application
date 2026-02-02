import {User} from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import cookie from 'cookie'
export const register = async(req,res) => {
    try {
        const {fullname , username , password , confirmPassword , gender ,} = req.body
        if(!fullname || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({
                message : "all field are required",
                success:false
            })
        }
        if(password !== confirmPassword){
            return res.status(400).json({
                message:"please enter correct password",
                success:false
            })
        }
        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({
                message:"user already exist",
                success:false
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
            success:true
        })
        } catch (error) {
            return res.status(400).json({
                success:false,
                message:error.message
            })
        }
    } catch (error) {
        return res.status(400).json({
            message:"failed to register try again",
            success:false,
            error:error.message
        })
    }
}

export const login = async(req,res) => {
    try {
        const {username,password} = req.body;
        if(!username || !password){
            return res.status(400).json({
                message:"please fill login details",
                success:false
            })
        }
        const existUser = await User.findOne({username})
        if(!existUser){
            return res.status(400).json({
                message:"User doesn't exist please register.",
                success:false
            }) 
        }
        const passMatch = await bcrypt.compare(password,existUser.password);
        if(!passMatch){
            return res.status(400).json({
                message:"incorrect password!",
                success:false
            })
        }
        //after pass match gen token
        //tokendata contains payload user data
        const tokenData = {
            userId:existUser._id
        }
        const token =  jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{
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
                    profilePhoto:existUser.profilePhoto,
                    message:"login successfully",
                    success:true
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
            message:"Log out successfully.",
            success:true
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

//all other user 
export const getOtherUser = async(req,res) => {
    try {
        const loggedInUser = req.user;
        const otherUser  = await User.find({_id:{$ne:loggedInUser}}).select("-password");
        return res.status(200).json({
            success:true,
            message:"All Existing User Fetch",
            users:otherUser
        })
    } catch (error) {
        console.log(error)
    }
}