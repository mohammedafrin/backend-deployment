import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
const dbConnection= async ()=>{
    try{
      const connectionInstance= await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
      console.log("Connection is connected");
    }
    catch(error){
        console.log("MONGODB CONNECTION ERRORsssss",error);
        process.exit(1)
    }
}
export default dbConnection;
