import Product from "../model/product.model.js";


export const createProduct = async (req,res)=>{
try {
    const {pname,price,image,category}=req.body;
    console.log(req.body)
    const products = new Product({
        pname,
        price,
        image,
        category
        });
        await products.save();
        res.status(201).json({message:"Product created successfully",products});

} catch (error) {
    return res.status(500).json({
            message: "Product not created",
            error: error.message,
        })
}
}

export const getProduct = async (req,res)=>{
try {
const getdata = await Product.find();
res.status(200).json({message:"Product data fetched successfully",getdata});
        
} catch (error) {
    return res.status(500).json({
        message: "Product data not fetched",
        error: error.message,
        })
    }
}


