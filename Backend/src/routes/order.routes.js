import express from 'express'
import { getOrders, orderCompelet, statusUpdate } from '../controllers/orderNow.controller.js';



export const orderRoutes = express.Router();

orderRoutes.post("/ordernow",orderCompelet)
orderRoutes.get("/ordernow",getOrders)
orderRoutes.put("/updateStatus/:id",statusUpdate)

