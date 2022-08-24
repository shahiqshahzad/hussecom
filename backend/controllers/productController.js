import Product from "../model/productModel.js";
import asyncHandler from "express-async-handler";
const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.send(error);
  }
});

const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found ");
    // res.status(404).json({message:'product not found'})
  }
});

export { getProducts, getProductsById };
