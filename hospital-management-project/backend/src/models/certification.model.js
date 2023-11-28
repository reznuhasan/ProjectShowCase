import mongoose,{Schema} from "mongoose";

const certificationSchema=new Schema({
    name:{
        type:String,
        required:true,
    }
})

export const Certification=mongoose.model('certification',certificationSchema);