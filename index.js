const express =require('express');
const connectDB = require('./config/db');
const useRoutes = require('./routes/userRoutes');
require('dotenv').config()

const app =express()
connectDB();
app.use(express.json());
app.use("/api",useRoutes);
app.get('/',(req,res)=>{
    res.send('This is from express')

})


PORT=process.env.PORT 
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})  