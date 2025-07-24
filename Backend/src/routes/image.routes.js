import { ProductImage, uploadImage } from "../controllers/image.controller.js";
import express from 'express'
const imageroutes = express.Router();


imageroutes.post("/upload",uploadImage)
imageroutes.post("/productimg",ProductImage)


export default imageroutes