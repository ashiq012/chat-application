import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import router from './routes/userRoutes.js';
import messageRoute from './routes/messageRoute.js'
import cookieParser from 'cookie-parser'
import cors from 'cors';
import {server ,app} from './socketio/socket.js'
dotenv.config(); 
const PORT = process.env.PORT || 4000 ;

//cookie parse 
app.use(cookieParser())
//parse
app.use(express.json());
//urlencoded
app.use(express.urlencoded({extended:true}));
//cors fixing
const corsOption = {
    origin:'http://localhost:5173',
    credentials:true,
}
app.use(cors(corsOption));
//router mount
app.use('/api/v1/user',router);
app.use('/api/v1/message',messageRoute)

// database call 
connectDB();

server.listen(PORT , () => {
    console.log("server started at",PORT)
})