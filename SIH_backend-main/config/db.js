import mongoose from "mongoose";

const connectDB = async () => {
    try{
        // const conn = await mongoose.connect(process.env.MONGO_URL);
        const conn = await mongoose.connect("mongodb://mongodb:27017/sih");
        console.log(`Connected to Mongodb Database ${conn.connection.host}`);
    }
    catch(err){
        console.log (`Error in Mongodb ${err}`);
    }
}

export default connectDB;