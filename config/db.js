const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
    try {
       await  mongoose.connect(process.env.MONGO_URI)
       console.log("mongoose connected successfully");
       
    }catch (error){
        console.log("mongoose connection error",error);
        
      
    }
    
}
module.exports = connectDB;