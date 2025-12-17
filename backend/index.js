import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import router from './routes/userRoutes.js';
import messageRoute from './routes/messageRoute.js'
import cookieParser from 'cookie-parser'
dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 4000 ;

//cookie parse 
app.use(cookieParser())
//parse
app.use(express.json());
//router mount
app.use('/api/v1/user',router);
app.use('/api/v1/message',messageRoute)

// database call 
connectDB();

app.listen(PORT , () => {
    console.log("server started at",PORT)
})