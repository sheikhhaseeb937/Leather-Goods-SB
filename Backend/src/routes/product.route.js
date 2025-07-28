import express from 'express'
import { createProduct, deleteproduct, editproduct, getProduct} from '../controllers/product.controller.js';
import { getChectOrder, getProductdeatils } from '../controllers/productdetails.js';

const productRoute = express.Router();



productRoute.post('/product',createProduct)
productRoute.get('/product',getProduct)
productRoute.get('/product/:id', getProductdeatils);
productRoute.delete('/product/:id', deleteproduct);
productRoute.put('/product/:id', editproduct);
productRoute.get('/product/:checkout', getChectOrder)








export default productRoute