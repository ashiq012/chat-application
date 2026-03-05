import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";
import {getReceiverSocketId, io} from "../socketio/socket.js"
export const sendMessage = async(req,res) => {
    try {
        const senderId = req.user;
        const receiverId = req.params.id;
        const {message} = req.body
        let gotConversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })
        if(!gotConversation){
            gotConversation = await Conversation.create({
                participants:[senderId,receiverId]
            })
        }
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        })
        if(newMessage){
            await gotConversation.message.push(newMessage._id);
        }
        await gotConversation.save();
        //SOCKET IO
        const receiverSocketId = getReceiverSocketId(receiverId)
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }
        return res.status(200).json({
            success:true,
            newMessage
        })
    } catch (error) {
        console.log(error)
    }}

export const getMessage = async(req,res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.user;
        const conversation = await Conversation.findOne({
        participants:{$all:[senderId,receiverId]}
    }).populate("message")
    return res.status(201).json({
        message:"all msg are fetch",
        conversation
    })
    } catch (error) {
        console.log(error)
    }
}