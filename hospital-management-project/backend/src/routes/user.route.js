import express from "express"
import { createUser,loginUser} from "../controllers/user.ctrl.js";

const router=express.Router();

router.post('/register',createUser);
router.post('/login',loginUser)
router.get('/',(req,res)=>{
    res.send("find all user");
})

export default router;