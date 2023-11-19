import express from "express";
import multer, { memoryStorage } from "multer";
import { createUser, loginUser } from "../controllers/user.ctrl.js";
import { UploadImage } from "../controllers/uploader.controller.js";

const storage = memoryStorage();
const upload = multer({ storage });

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);

router.post("/upload-image", upload.single("image"), UploadImage);

router.get("/", (req, res) => {
  res.send("find all user");
});

export default router;
