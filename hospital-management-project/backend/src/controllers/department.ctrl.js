import Department from "../models/department.model.js"

const addDepartment=async(req,res)=>{
    try {
       const depName=req.body.name
        const dep=await Department.findOne({name:depName});
        if(dep){
            return res.status(400).json({error:"this department already available"})
        }
        const department=new Department({name:depName});
        const saveDepartment=await department.save();
        return res.status(200).json({message:"department insert successfully",saveDepartment})
    } catch (error) {
        return res.status(500).json({error:"server side error",error})
    }
}
const getAllDepartment=async(req,res)=>{
    try {
        const department=await Department.find();
        return res.status(200).json({message:"find all department successfully",department})
    } catch (error) {
        return res.status(500).json({error:"server side error",error})
    }
}
export {addDepartment,getAllDepartment}