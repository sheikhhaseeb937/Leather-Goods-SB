import multer from "multer";
import { storage } from "../config/cloudner.js";



const upload = multer({storage})

export const uploadImage = [
  upload.single('image',2),
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


export const ProductImage = [
  upload.array('images'), 
  (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const imageUrls = req.files.map(file => file.path); 

    res.json({
      message: 'Images uploaded successfully!',
      imageUrls,
    });
  },
];