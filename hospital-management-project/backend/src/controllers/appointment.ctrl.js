import Appointment from "../models/appointment.model.js";

const createAppointment=async(req,res)=>{
    try {
        const findAppointment=await Appointment.find({email:req.body.email})
        const {doctor,month,date,name}=req.body
       const checkAppointment= findAppointment.filter(appointment=>appointment.name===name && appointment.doctor===doctor && appointment.month===month && appointment.date===date)
       console.log(checkAppointment.length)
       if(checkAppointment.length>0){
        return res.status(409).json({error:"already submit a appointment"})
       }
        const appointment=new Appointment(req.body);
        const savedAppointment =await appointment.save();  
        return res.status(200).json({message:"appointment request submit",savedAppointment})
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
const findAllAppointment=async(req,res)=>{
    try {
        const allAppointments = await Appointment.find()
        return res.status(200).json({"message":"get all appointment",allAppointments})
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
export {createAppointment,findAllAppointment}