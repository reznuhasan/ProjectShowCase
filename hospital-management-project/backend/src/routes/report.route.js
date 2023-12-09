import express from "express"
import { uploadReport } from "../controllers/user.ctrl.js";
import authenticate from "../middleware/Authenticate.js";

const router=express.Router();

router.post("/report",uploadReport)

export default router;