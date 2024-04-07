import mongoose from "mongoose";

const connectDB = async () => {
    try{
        // const conn = await mongoose.connect(process.env.MONGO_URL);
        // const conn = await mongoose.connect("mongodb://mongodb:27017/sih");
        // const conn = await mongoose.connect("mongodb://rebooters:sk1234@mongodb:27017/sih?authSource=admin");
        const conn = await mongoose.connect(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/sih?authSource=admin`);
        console.log(`Connected to Mongodb Database ${conn.connection.host}`);
    }
    catch(err){
        console.log (`Error in Mongodb ${err}`);
    }
}

export default connectDB;