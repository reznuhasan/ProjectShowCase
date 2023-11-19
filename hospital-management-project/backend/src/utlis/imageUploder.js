import { cloudinary } from "../config/cloudinary.js";

export const imgUploader = async (file) => {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
};
