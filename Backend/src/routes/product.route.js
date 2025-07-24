import express from 'express'
import { createProduct, getProduct} from '../controllers/product.controller.js';

const productRoute = express.Router();



productRoute.post('/product',createProduct)
productRoute.get('/product',getProduct)




export default productRoute