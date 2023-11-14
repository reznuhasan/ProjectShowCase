import express from "express"
import { createUser } from "../controllers/user.ctrl.js";

const router=express.Router();

router.post('/create',createUser);
router.get('/',(req,res)=>{
    res.send("find all user");
})

export default router;