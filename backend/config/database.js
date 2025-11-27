import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=> {
        console.log(`Database are connect successfully..`);
    })
    .catch((err)=> {
        console.log(`failed to connect Database please check DB IP address.`);
    })
}
export default connectDB;