import mongoose from "mongoose";


const mongDB= ()=>{
    try {
        const mongooseConnect = mongoose.connect(process.env.MONODB_URI);
        console.log("Mongoose connected successfully ");
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
}
export default mongDB;