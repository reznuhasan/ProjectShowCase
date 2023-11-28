import express from "express"
import userRoute from "./user.route.js";
import phoneRoute from "./phone.route.js";
import doctorPosition from "./position.route.js"
import doctorDepartment from "./department.route.js"
import doctorCertificate from "./certification.route.js"
const router = express.Router();

router.use('/api/v1/users',userRoute);
router.use("/api/v1/phone",phoneRoute);
router.use('/api/v1/doctor/positon',doctorPosition)
router.use('/api/v1/doctor/department',doctorDepartment);
router.use('/api/v1/doctor/certification',doctorCertificate);


export default router;