import express from 'express'
import { orderCompelet } from '../controllers/orderNow.controller.js';



export const orderRoutes = express.Router();

orderRoutes.post("/ordernow",orderCompelet)