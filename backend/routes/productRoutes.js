import express from 'express'
import Product from "../model/productModel.js";

const router = express.Router()


router.get("/", async (req, res) => {
    const products = await Product.find({});
   res.json(products)
  });
  
  router.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
   if(product){
    res.send(product);
   }else{
    res.status(404).json({message:'product not found'})
   }
  });
export default router