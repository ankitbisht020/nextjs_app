import mongoose from "mongoose";

type connectionObject ={
    isConnected?:Number
}
const connection: connectionObject={};
  async function dbConnect(): Promise<void>{
    if (connection.isConnected ){
        console.log("Already connected to datbase");
    }
    try {
        await mongoose.connect(process.env.MONGOURL || "")
    }catch(error){
        console.log("Databse connection Failed", error);

        process.exit(1);
    }
  }
   
export default dbConnect ;