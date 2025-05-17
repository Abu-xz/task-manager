import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/";


export const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('mongodb connected')
    } catch (error) {
         console.error('MongoDB connection error:', error);
    }
};
