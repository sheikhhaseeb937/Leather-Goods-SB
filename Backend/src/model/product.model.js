import mongoose, { Schema } from "mongoose";

const productScheme = new Schema({
  pname: {
    type: String,
  
  },
  price: {
    type: String,

  },
  image: {
    type: [String],

  },
  category: {
    type: String,

  },
});

const Product = mongoose.model("productsDetails", productScheme);

export default Product;
