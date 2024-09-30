import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const mongodb_url = process.env.MONGODB_URL 


export async function ConnectDB(){
    try {
        const db = await mongoose.connect(mongodb_url)
        console.log(`connected to mongodb ${db.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }
}

