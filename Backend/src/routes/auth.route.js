import express from 'express'
import { userCreate, userlogin } from '../controllers/user.controller.js';

const authRoutes = express.Router();





authRoutes.post('/signup',userCreate)
authRoutes.post('/login', userlogin);


export default authRoutes;