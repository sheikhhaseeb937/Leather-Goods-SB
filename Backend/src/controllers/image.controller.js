import multer from "multer";
import { storage } from "../config/cloudner.js";



const upload = multer({storage})

export const uploadImage = [
  upload.single('image'),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    res.json({
      message: 'Image uploaded successfully!',
      imageUrl: req.file.path,
    });
  },
];
