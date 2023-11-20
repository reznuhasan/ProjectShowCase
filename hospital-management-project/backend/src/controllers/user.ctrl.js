import { userModel } from "../models/user.model.js";
const User=userModel;

const createUser=async(req,res)=>{
    try {
        const email=req.body.email
        const checkUser=await User.findOne({email:email})
        if(checkUser){
            res.status(401).json({"message":"email already used"});
        }
        const newUser=new User(req.body);
        const saveUser=await newUser.save();
        res.status(200).json({"message":"user create successfully",saveUser})
    } catch (error) {
        res.status(400).json({"error":"Authentication Error"})
    }
}
const loginUser=async(req,res)=>{
    try {
        const email=req.body.email
        const checkUser=await User.findOne({email:email});
        if(!checkUser){
            res.status(401).json({"message":"user not find"})
        }
        const validPassword=checkUser.isPasswordCorrect(checkUser.password)
        if(validPassword===false){
            res.status(401).json({"message":"password is not correct"})
        }
        const token="Barer"+" "+checkUser.accessTokenGenerator();
        console.log(token)
        res.status(200).json({"message":"user login successfully",token})
    } catch (error) {
        res.status(400).json({"error":"Authentication Error"})
    }
}

export {createUser,loginUser};