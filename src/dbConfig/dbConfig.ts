import mongoose from "mongoose";

const dbconfig = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI!);
        console.log("Connected to the database");
    } catch (error) {
        console.log("something error happened")
    }
}

export default dbconfig