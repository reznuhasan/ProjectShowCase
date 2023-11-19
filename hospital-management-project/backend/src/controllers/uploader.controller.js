import { imgUploader } from "../utlis/imageUploder.js";

export const UploadImage = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const { url } = await imgUploader(dataURI);
    res.json(url);
  } catch (error) {
    console.log(error);
    res.send({
      message: error.message,
    });
  }
};
