import Doctor from "../models/doctor.model.js";

const addDoctor=async(req,res)=>{
    try {
        console.log(req.body)
        console.log(req.file)
        return res.status(200).json({"message":"doctor add successfully"})
    } catch (error) {
        return res.status(500).json({"error":"server side error"},error)
    }
}

export {addDoctor}