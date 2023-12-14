import express from "express";
import { createAppointment, findAllAppointment } from "../controllers/appointment.ctrl.js";

const router=express.Router();

router.post('/',createAppointment)
router.get("/all",findAllAppointment)

export default router;