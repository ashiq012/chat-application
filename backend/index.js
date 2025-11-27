import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import router from './routes/userRoutes.js';
dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 4000 ;

//parse
app.use(express.json());
//router mount
app.use('/api/v1/user',router)

// database call 
connectDB();

app.listen(PORT , () => {
    console.log("server started at",PORT)
})