import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const mongoConnect = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI)
       console.log("Databse connected") 
    } catch (error) {
        console.log("Databse not connected")
    }
}

mongoConnect();

export default mongoConnect;