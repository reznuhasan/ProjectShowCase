import { userModel } from "../models/user.model.js";
const User=userModel;

const createUser=async(req,res)=>{
    try {
        const email=req.body.email
        const checkUser=await User.findOne({email:email})
        if(checkUser){
          return  res.status(401).json({"message":"email already used"});
        }
        const newUser=new User(req.body);
        const saveUser=await newUser.save();
      return  res.status(200).json({"message":"user create successfully",saveUser})
    } catch (error) {
      return  res.status(400).json({"error":"Authentication Error"})
    }
}
const loginUser=async(req,res)=>{
    try {
        const email=req.body.email
        const checkUser=await User.findOne({email:email});
        console.log(checkUser)
        if(!checkUser){
           return res.status(401).json({error:"user not find"})
        }
        const validPassword=await checkUser.isPasswordCorrect(req.body.password)
        console.log(validPassword)
        if(validPassword===false){
           return res.status(401).json({error:"password is not correct"})
        }
        const token="Barer"+" "+checkUser.accessTokenGenerator();
       return res.status(200).json({"message":"user login successfully",token})
    } catch (error) {
       return res.status(400).json({"error":"Authentication Error"})
    }
}

export {createUser,loginUser};