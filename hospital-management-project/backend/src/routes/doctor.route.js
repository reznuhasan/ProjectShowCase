import express from "express"
import { addDoctor, getAllDoctor, searchByDepartment } from "../controllers/doctor.ctrl.js";
import { upload } from "../middleware/MulterUpload.js";

const router=express.Router();
router.get("/:department",searchByDepartment);
router.post("/",upload.single('profile'),addDoctor)
router.get('/all',getAllDoctor)

export default router;