import express from "express"
import { addDoctor } from "../controllers/doctor.ctrl.js";
import { upload } from "../middleware/MulterUpload.js";

const router=express.Router();

router.post("/",upload.single('profile'),addDoctor)
router.get('/',(req,res)=>{
    res.send("get all doctor")
})

export default router;