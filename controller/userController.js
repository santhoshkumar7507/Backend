const userModel = require("../models/User")

exports.getUser = async (req, res) => {
    try {
        const user=await userModel.find();
         res.json(user)
    } catch (error) {
        console.error(err);
    res.status(500).json({ error: 'Server error' });
    }
}

exports.postUser=async(req,res)=>{
    const{title,amount}=req.body;
    try{
        const newUser=new userModel({title,amount});
        await newUser.save();
        res.status(201).json(newUser);
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

 
   