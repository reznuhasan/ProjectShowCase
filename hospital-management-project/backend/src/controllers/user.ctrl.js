import { userModel } from "../models/user.model.js";
const User=userModel;

const createUser=async(req,res)=>{
    try {
        const newUser=new User(req.body);
        const saveUser=await newUser.save();
        res.status(200).json({"message":"user create successfully",saveUser})
    } catch (error) {
        res.status(400).json({"error":"Authentication Error"})
    }
}

export {createUser};