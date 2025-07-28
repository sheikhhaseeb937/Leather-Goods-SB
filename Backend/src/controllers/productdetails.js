import Product from "../model/product.model.js";




// GET /api/product/:id
export const getProductdeatils = async (req, res) => {
  try {
    const { id } = req.params; 

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product data fetched successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Product data not fetched",
      error: error.message,
    });
  }
};



///checkout product
export const getChectOrder = async (req, res) => {
  try {
    const { id } = req.params; 

    const checkOut = await Product.findById(id);
console.log(checkOut)
    if (!checkOut) {
      return res.status(404).json({
        message: "Product check not found",
      });
    }

    res.status(200).json({
      message: "Product check data fetched successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Product check data not fetched",
      error: error.message,
    });
  }
};
