import dotenv from "dotenv";
// Correct way to import Cloudinary (CommonJS module) in ESM:
import cloudinaryPkg from 'cloudinary';
const { v2: cloudinary } = cloudinaryPkg;

// Cloudinary storage from multer-storage-cloudinary (ESM-compatible)
import { CloudinaryStorage } from 'multer-storage-cloudinary';


dotenv.config();


  cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key:process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });


   const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    allowed_formats: ['jpg', 'png', 'jpeg', 'gif'],
  },
});

export{
    cloudinary,
    storage
}